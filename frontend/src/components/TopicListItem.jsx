import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({data}) => {
  const {id, slug, title} = data;
  return (
    <div className="topic-list__item">
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;

