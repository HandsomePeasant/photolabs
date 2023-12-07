import { useEffect, useReducer } from "react";

const initialState = {
  likedPhotoIDs: [],
  likedPhotosCount: 0,
  isModalOpen: false,
  selectedPhoto: null,
  photoData: [],
  topicData: []
};

const appReducer = (state, action) => {
  switch (action.type) {

    case 'SET_PHOTO_DATA':
      return {
        ...state,
        photoData: action.payload
      };

    case "SET_TOPIC_DATA":
      return {
        ...state,
        topicData: action.payload,
      };

    case 'TOGGLE_LIKE':
      const photoId = action.payload;
      const isLiked = state.likedPhotoIDs.includes(photoId);

      // Check if photo is liked, then toggle the status -- either add the photoId to the tracking array, or remove it
      return {
        ...state,
        likedPhotoIDs: isLiked
          ? state.likedPhotoIDs.filter((id) => id !== photoId)
          : [...state.likedPhotoIDs, photoId],
        likedPhotosCount: isLiked
          ? state.likedPhotosCount - 1
          : state.likedPhotosCount + 1
      };

    case 'OPEN_MODAL':
      return {
        ...state,
        isModalOpen: true,
        selectedPhoto: action.payload,
      };

    case 'CLOSE_MODAL':
      return {
        ...state,
        isModalOpen: false,
        selectedPhoto: null
      };

    default:
      return state;
  }
};

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("appState", serializedState);
  } catch (error) {
    console.error("Error saving state to localStorage:", error);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("appState");
    if (serializedState === null) {
      return initialState;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Error loading state from localStorage:", error);
    return initialState;
  }
};

function useApplicationData() {
  const [state, dispatch] = useReducer(appReducer, initialState, loadFromLocalStorage);

  useEffect(() => {
    saveToLocalStorage(state);
  }, [state]);

  const ACTIONS = {
    SET_PHOTO_DATA: "SET_PHOTO_DATA",
    SET_TOPIC_DATA: "SET_TOPIC_DATA",
    TOGGLE_LIKE: "TOGGLE_LIKE",
  };

  const apiUrl = "http://localhost:8001/api";

  // Fetch photos from the backend, store them in a global variable
  useEffect(() => {
    fetch(`${apiUrl}/photos`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
      });
  }, []);

  // Fetch topics from the backend, store them in a global variable
  useEffect(() => {
    fetch(`${apiUrl}/topics`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
      })
      .catch((error) => {
        console.error("Error fetching topics:", error);
      });
  }, []);

  // When a topic in the nav bar is clicked, display photos of the relevant type
  const fetchTopicPhotos = (topicId) => {
    fetch(`${apiUrl}/topics/photos/${topicId}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
      });
  };

  const { photoData, topicData, isModalOpen, selectedPhoto, likedPhotoIDs, likedPhotosCount } = state;

  const toggleLike = (photoId) => {
    dispatch({ type: "TOGGLE_LIKE", payload: photoId });
  };

  const openModal = (photo) => {
    dispatch({ type: "OPEN_MODAL", payload: photo });
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return {
    photoData,
    topicData,
    isModalOpen,
    selectedPhoto,
    toggleLike,
    openModal,
    closeModal,
    likedPhotoIDs,
    likedPhotosCount,
    fetchTopicPhotos,
  };
}

export default useApplicationData;