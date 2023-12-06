import React from 'react';
import useApplicationData from '../hooks/useApplicationData';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (data) => {
  const { photoData, topicData, toggleLike, isLiked, likedPhotosCount, fetchPhotosByTopic } = useApplicationData();

  return (
      <div className="home-route">
        <TopNavigation isLiked={isLiked} likedPhotosCount={likedPhotosCount} topicData={topicData} fetchPhotosByTopic={fetchPhotosByTopic}/>
        <PhotoList photos={photoData} topics={topicData} toggleLike={toggleLike} openModal={data.openModal} isLiked={isLiked} />
      </div>
  );
};

export default HomeRoute;

