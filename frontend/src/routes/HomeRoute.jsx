import React from 'react';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photoData, topicData, openModal, isModalOpen, toggleLike, likedPhotosCount, likedPhotoIDs, selectedPhoto, fetchTopicPhotos }) => {

  return (
    <div className="home-route">
      <TopNavigation likedPhotosCount={likedPhotosCount} topicData={topicData} fetchTopicPhotos={fetchTopicPhotos} />
      <PhotoList photos={photoData} topics={topicData} toggleLike={toggleLike} openModal={openModal} isModalOpen={isModalOpen} selectedPhoto={selectedPhoto} likedPhotosCount={likedPhotosCount} likedPhotoIDs={likedPhotoIDs} />
    </div>
  );
};

export default HomeRoute;

