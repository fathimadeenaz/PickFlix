import { useState, useEffect, useRef } from "react";

import "./modal.scss";

const Modal = ({ id, active, children }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(active);
  }, [active]);

  return (
    <div id={id} className={`modal ${showModal ? "active" : ""}`}>
      {children}
    </div>
  );
};

export const ModalContent = ({ onClose, children }) => {
  const contentRef = useRef(null);

  const closeModal = () => {
    contentRef.current.parentNode.classList.remove("active");
    if (onClose) onClose();
  };

  return (
    <div ref={contentRef} className="modal__content">
      {children}
      <div className="modal__content__close" onClick={closeModal}>
        <i className="bx bx-x"></i>
      </div>
    </div>
  );
};

export default Modal;
