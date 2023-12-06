import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({topic, fetchPhotosByTopic}) => {
  return (
    <div className="topic-list__item" onClick={() => fetchPhotosByTopic(topic.id)}>
      <span>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;

