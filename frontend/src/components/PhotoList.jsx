import React from "react";
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";

const PhotoList = ({data}) => {
  return (
    <ul className="photo-list">
      {data.map((item) => (
        <PhotoListItem key={item.id} data={item} />
      ))}
    </ul>
  );
};

export default PhotoList;