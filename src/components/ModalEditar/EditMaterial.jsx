import React, { useContext } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { useForm } from "react-hook-form";
import { iUserContext, UserContext, useUserContext } from "../../contexts/userContext";
import Modal from "react-modal";
import "./styles.css";

/*export interface iEditMaterial {
  image: string;
  name: string;
  type: string;
  weight: string;
  description: string;
}*/

Modal.setAppElement("#root");
const EditMaterial = () => {
  const { register, handleSubmit } = useForm();
  const { modalIsOpen, closeModal, formSubmit } = useUserContext()

  return (
    <>
      {/* <button onClick={openModal}>abrir</button> */}
      <Modal isOpen={modalIsOpen} className="Modal" overlayClassName="Overlay">
        <div className="containerButtonClose">
          <button className="buttonClose" onClick={closeModal}>
            <IoMdCloseCircle />
          </button>
        </div>
        <div className="containerForm">
          <p>Editar material</p>
          <form className="formStyle" onSubmit={handleSubmit(formSubmit)}>
            <input
              type="text"
              placeholder="Insira a url da imagem"
              {...register("image")}
            />
            <input
              type="text"
              placeholder="Digite o nome do material"
              {...register("name")}
            />
            <input
              type="text"
              placeholder="Digite o tipo de material"
              {...register("type")}
            />
            <input
              type="text"
              placeholder="Digite o peso do material"
              {...register("weight")}
            />
            <input
              type="text"
              placeholder="Digite Descrição do material"
              {...register("description")}
            />
            <button className="buttonSubmit" type="submit">
              Editar
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default EditMaterial;