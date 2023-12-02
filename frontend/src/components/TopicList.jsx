import React from "react";
import TopicListItem from './TopicListItem';
import "../styles/TopicList.scss";

const TopicList = ({data}) => {
  return (
    <div className="top-nav-bar__topic-list">
      {data.map((item) => (
        <TopicListItem key={item.id} data={item} />
      ))}
    </div>
  );
};

export default TopicList;