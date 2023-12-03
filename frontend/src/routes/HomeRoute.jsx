import React from 'react';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import photos from '../mocks/photos';
import '../styles/HomeRoute.scss';

const HomeRoute = () => {

  return (
      <div className="home-route">
        <TopNavigation />
        <PhotoList data={photos} />
      </div>
  );
};

export default HomeRoute;

