import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({topic, fetchTopicPhotos}) => {
  return (
    <div className="topic-list__item" onClick={() => fetchTopicPhotos(topic.id)}>
      <span>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;

