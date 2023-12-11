import React from 'react';
import useApplicationData from './hooks/useApplicationData';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import ModalBackdrop from './components/ModalBackdrop';
import LikedPhotosModal from './routes/LikedPhotosModal';

const App = () => {
  // Initialize all the variables that will be used throughout the app
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
    fetchTopicPhotos,
    modalType
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

{isModalOpen && (
        <>
          <ModalBackdrop onClick={() => { closeModal(); }} />
          {modalType === 'likedPhotos' || selectedPhoto === null ? (
            <LikedPhotosModal
              likedPhotoIDs={likedPhotoIDs}
              toggleLike={toggleLike}
              closeModal={closeModal}
              likedPhotosCount={likedPhotosCount}
              photos={photoData}
            />
          ) : (
            <PhotoDetailsModal
              photo={selectedPhoto}
              photoId={selectedPhoto.id}
              toggleLike={toggleLike}
              closeModal={closeModal}
              isModalOpen={isModalOpen}
              likedPhotosCount={likedPhotosCount}
              likedPhotoIDs={likedPhotoIDs}
              openModal={openModal}
            />
          )}
        </>
      )}
    </div>
  );
};

export default App;