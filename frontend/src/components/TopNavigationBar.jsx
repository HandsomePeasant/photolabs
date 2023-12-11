import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = ({ likedPhotosCount, topicData, fetchTopicPhotos, likedPhotoIDs, openModal }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topicData={topicData} fetchTopicPhotos={fetchTopicPhotos} />
      <FavBadge likedPhotosCount={likedPhotosCount} likedPhotoIDs={likedPhotoIDs} openModal={openModal} />
    </div>
  )
}

export default TopNavigation;