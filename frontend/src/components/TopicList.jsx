import React from "react";
import TopicListItem from './TopicListItem';
import "../styles/TopicList.scss";

const TopicList = ({topicData, fetchTopicPhotos}) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topicData.map((topic) => (
        <TopicListItem key={topic.id} topic={topic} fetchTopicPhotos={fetchTopicPhotos}/>
      ))}
    </div>
  );
};

export default TopicList;