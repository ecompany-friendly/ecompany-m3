import { useState } from "react";
import Modal from "react-modal";
import { IoMdCloseCircle } from "react-icons/io";
import { useForm } from "react-hook-form";
import Api from "../../services/Api";
import { useNavigate } from "react-router-dom";
import "./styles.css";

interface iEditMaterial {
  image: string,
  name: string,
  type: string,
  weight: string,
  description: string
}

Modal.setAppElement("#root");
const EditMaterial = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const {register, handleSubmit} = useForm<iEditMaterial>()

  const token = localStorage.getItem("@eCOMPANY:token")
  const id = localStorage.getItem("@eCOMPANY:user_id")
  const navigate = useNavigate()

  async function formSubmit(data: iEditMaterial): Promise<void>{
    console.log(data)
    try {
      Api.defaults.headers.authorization = `Bearer ${token}`
      await Api.patch(`/products/${id}`, data)
      
      navigate("/dashboard")
      
    } catch (error) {
      console.log(error)      
    }

  }

  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }


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
            <input type="text" placeholder="Insira a url da imagem" {...register("image")}/>
            <input type="text" placeholder="Digite o nome do material" {...register("name")}/>
            <input type="text" placeholder="Digite o tipo de material" {...register("type")}/>
            <input type="text" placeholder="Digite o peso do material" {...register("weight")}/>
            <input type="text" placeholder="Digite Descrição do material" {...register("description")}/>
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
