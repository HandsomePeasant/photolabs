import React from 'react';
import useApplicationData from './hooks/useApplicationData';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';
import ModalBackdrop from './components/ModalBackdrop';


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
      {isModalOpen && 
        <>
          <ModalBackdrop onClick={() => { closeModal(); }} />
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
        </>
      }
    </div>
  );
};

export default App;