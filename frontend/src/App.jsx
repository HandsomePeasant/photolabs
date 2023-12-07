import React from 'react';
import useApplicationData from './hooks/useApplicationData';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';

const App = () => {

  const {
    isModalOpen,
    selectedPhoto,
    toggleLike,
    openModal,
    closeModal,
    likedPhotosCount,
    photoData,
    topicData,
    likedPhotoIDs,
    fetchTopicPhotos
  } = useApplicationData();

  return (
    <div>
      <HomeRoute
        photoData={photoData}
        topicData={topicData}
        openModal={openModal}
        isModalOpen={isModalOpen}
        toggleLike={toggleLike}
        likedPhotosCount={likedPhotosCount}
        likedPhotoIDs={likedPhotoIDs}
        selectedPhoto={selectedPhoto}
        fetchTopicPhotos={fetchTopicPhotos}
      />
      {isModalOpen && selectedPhoto &&
        <>
          <PhotoDetailsModal
            photo={selectedPhoto}
            photoId={selectedPhoto.id}
            toggleLike={toggleLike}
            handleClose={() => {
              closeModal();
            }}
            similarPhotos={Object.values(selectedPhoto.similar_photos)}
            isModalOpen={isModalOpen}
            likedPhotosCount={likedPhotosCount}
            likedPhotoIDs={likedPhotoIDs}
          />
        </>
      }
    </div>
  );
};

export default App;