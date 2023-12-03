import React, { createContext, useReducer, useContext } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';

const GlobalContext = createContext();

const initialState = {
  likedPhotoIDs: [],
  likedPhotosCount: 0,
  isModalOpen: false,
  selectedPhoto: null
};

const globalReducer = (state, action) => {
  switch (action.type) {
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

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }

  return context;
};

const AppContent = () => {
  const { state } = useGlobalContext();

  return (
    <div>
      <HomeRoute />
      {state.isModalOpen && <PhotoDetailsModal />}
    </div>
  );
};

const App = () => {
  return (
    <GlobalProvider>
      <AppContent />
    </GlobalProvider>
  );
};

export { useGlobalContext, GlobalProvider, App as default };
export const openModal = (photo) => ({ type: 'OPEN_MODAL', payload: photo });
export const closeModal = () => ({ type: 'CLOSE_MODAL' });
