import React from 'react';
import PhotoList from './components/PhotoList';
import TopNavigation from './components/TopNavigationBar';
import photos from './mocks/photos';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <TopNavigation />
      <PhotoList data={photos} />
    </div>
  );
};

export default App;
