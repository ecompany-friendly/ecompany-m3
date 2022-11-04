import { useState } from "react"
import { BtnClose, ContainerImgName, ContainerModal, ContentModal, ImageModal, NameModal, StyledModal as Modal, TitleModal } from "./StyledModalUser"

const ModalUser = () => {
    
    const [modalIsOpen, setIsOpen] = useState(false)
    
    const openModal = () => {
      setIsOpen(true)
    }

    const modalClose = () => {
        setIsOpen(false)
    }

    return (
        <>
            <button
                onClick={openModal}
            >
            abrir modal descrição usuário
            </button>
            
            <Modal
                isOpen = {modalIsOpen}
                style = {{
                    overlay: {
                        zIndex: "420",
                        backgroundColor: 'rgba(0, 0, 0, 0.45)',
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        maxWidth: "100%",
                    },
                    content: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "382px",
                        width: "393px",
                        maxWidth: "100%",
                        borderRadius: "10px",
                        backgroundColor: "#142518",
                    }
                }}
            >
                <ContainerModal>
                        <BtnClose
                            onClick={modalClose}>
                            <span>X</span> 
                        </BtnClose>

                       <TitleModal>
                            Dados do usuário
                        </TitleModal>

                       <ContainerImgName>
                        <ImageModal
                            src=""
                            alt=""
                        />
                        <NameModal>
                            Lucas Lara
                        </NameModal> 
                       </ContainerImgName>

                       <ContentModal>
                            E-mail: lucas.lara@mail.com
                        </ContentModal>   
                        <ContentModal>
                            Contato: (99) 99999-9999
                        </ContentModal> 
                </ContainerModal>
            </Modal>
        </>
    )
}

export default ModalUser