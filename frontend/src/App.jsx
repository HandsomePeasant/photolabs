import React from 'react';
import AppContent from './components/AppContent';
import { GlobalProvider } from './components/GlobalProvider';
import './App.scss';

const initialState = {
  likedPhotoIDs: [],
  likedPhotosCount: 0,
  isModalOpen: false,
  selectedPhoto: null
};

const App = () => {

  return (
    <GlobalProvider initialState={initialState}>
      <AppContent/>
    </GlobalProvider>
  );
};

export default App;