import React from 'react';
import '../styles/ModalBackdrop.scss';

// Creates a backdrop behind the modal so HomeRoutes components are not interactible
const ModalBackdrop = ({ onClick }) => (
  <div className="modal-backdrop" onClick={onClick}></div>
);

export default ModalBackdrop;