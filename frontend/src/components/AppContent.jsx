import React from "react";
import { useGlobalContext } from './GlobalProvider';
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import HomeRoute from "routes/HomeRoute";

const AppContent = () => {
  const { state } = useGlobalContext();

  return (
    <div>
      <HomeRoute />
      {state.isModalOpen && <PhotoDetailsModal />}
    </div>
  );
};

export default AppContent;