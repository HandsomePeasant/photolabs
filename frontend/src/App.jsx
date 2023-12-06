import React from 'react';
import useApplicationData from './hooks/useApplicationData';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';

const App = () => {

  const {
    isModalOpen,
    selectedPhoto,
    isLiked,
    toggleLike,
    openModal,
    closeModal,
    likedPhotosCount,
    photoData,
    topicData,
  } = useApplicationData();

  return (
    <div>
      <HomeRoute photoData={photoData} topicData={topicData} openModal={openModal} isLiked={isLiked} toggleLike={toggleLike} likedPhotosCount={likedPhotosCount}/>
      {isModalOpen &&
        <PhotoDetailsModal
          photo={selectedPhoto}
          toggleLike={toggleLike}
          handleClose={() => {
            closeModal();
          }}
          similarPhotos={Object.values(selectedPhoto.similar_photos)}
          isModalOpen={isModalOpen}
          isLiked={isLiked}
        />
      }
    </div>
  );
};

export default App;