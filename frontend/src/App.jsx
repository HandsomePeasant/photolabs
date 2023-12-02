import React, { createContext, useReducer, useContext } from 'react';
import PhotoList from './components/PhotoList';
import TopNavigation from './components/TopNavigationBar';
import photos from './mocks/photos';
import './App.scss';

const GlobalContext = createContext();

const initialState = {
  likedPhotoIDs: [],
  likedPhotosCount: 0
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

const App = () => {
  return (
    <GlobalProvider>
      <div className="App">
        <TopNavigation />
        <PhotoList data={photos} />
      </div>
    </GlobalProvider>
  );
};

export { useGlobalContext, App as default };
