import { useState } from "react";
import Modal from "react-modal";

export const NewProduct = () => {
  const [isOpen, setIsOpen] = useState(true);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <form>
        <h2>Criar novo material</h2>
      </form>
    </Modal>
  );
};
