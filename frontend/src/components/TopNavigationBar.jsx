import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = ({isLiked, likedPhotosCount, topicData, fetchPhotosByTopic}) => {
  return (
      <div className="top-nav-bar">
        <span className="top-nav-bar__logo">PhotoLabs</span>
        <TopicList topicData={topicData} fetchPhotosByTopic={fetchPhotosByTopic}/>
        <FavBadge isLiked={isLiked} likedPhotosCount={likedPhotosCount}/>
      </div>
  )
}

export default TopNavigation;