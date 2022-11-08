import { useState } from "react";
import { StyledUserDataModal } from "./style";
import { IoIosCloseCircle } from "react-icons/io";

const customStyles = {
  content: {},
  overlay: {
    with: "100%",
    height: "100%",
  },
};

export const UserDataModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <StyledUserDataModal
      ariaHideApp={false}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      overlayClassName="modal-overlay"
      className="modal-content"
      style={{
        content: {
          backgroundColor: "var(--primary)",
          width: "287px",
          maxWidth: "393px",
          height: "355px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px",
        },
        overlay: {
          position: "fixed",
          top: "0",
          zIndex: "100",
          backgroundColor: "rgba(0,0,0,0.4)",
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <div className="container">
        <button>
          <IoIosCloseCircle className="closeIcon" onClick={closeModal} />
        </button>
        <div className="content">
          <div className="headerModal">
            <h2>Dados do usuário</h2>
          </div>
          <div className="dataContainer">
            <div className="userName">
              <img src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png" alt=""/>
              <h2>Username</h2>
            </div>
            <div className="userData">
              <span>E-mail: lorem.ipsum@lorem.com</span>
              <span>Contatto: (99)99999-9999</span>
            </div>
          </div>
        </div>
      </div>
    </StyledUserDataModal>
  );
};
