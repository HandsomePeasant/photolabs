import React from "react";
import TopicListItem from './TopicListItem';
import "../styles/TopicList.scss";

const TopicList = ({topicData, fetchPhotosByTopic}) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topicData.map((topic) => (
        <TopicListItem key={topic.id} topic={topic} fetchPhotosByTopic={fetchPhotosByTopic}/>
      ))}
    </div>
  );
};

export default TopicList;