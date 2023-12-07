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

function useApplicationData() {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const ACTIONS = {
    SET_PHOTO_DATA: "SET_PHOTO_DATA",
    SET_TOPIC_DATA: "SET_TOPIC_DATA",
    TOGGLE_LIKE: "TOGGLE_LIKE",
  };

  const apiUrl = "http://localhost:8001/api";

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

  const { photoData, topicData, isModalOpen, selectedPhoto, isLiked, likedPhotoIDs, likedPhotosCount } = state;

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
    isLiked,
    toggleLike,
    openModal,
    closeModal,
    likedPhotoIDs,
    likedPhotosCount,
    fetchTopicPhotos,
  };
}

export default useApplicationData;