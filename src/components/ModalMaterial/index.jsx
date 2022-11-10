import { useState } from "react"
import { BtnClose, ContainerContent, ContainerModal, ContentDescriptionModal,  ContentModal, DescriptionModal, StyledModal as Modal, TitleModal } from "./styles"

const ModalMaterial = () => {

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
                abrir modal descrição material
            </button>
            <Modal
                ariaHideApp={false}
                isOpen={modalIsOpen}
                style={{
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
                        height: "555px",
                        width: "93%",
                        maxWidth: "393px",
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
                        Tábua de Peroba Rosa
                        {/* {product.name} */}
                    </TitleModal>

                    <ContainerContent>
                        <ContentModal>
                            Tipo: Madeira
                            {/* {product.type} */}
                        </ContentModal>
                        <ContentModal>
                            Peso: 80kg
                            {/* {product.weight} */}
                        </ContentModal>
                        
                        <ContentDescriptionModal>
                        <DescriptionModal>Description</DescriptionModal>
                        <DescriptionModal>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </DescriptionModal>
                        </ContentDescriptionModal>
                    </ContainerContent>
                </ContainerModal>
            </Modal>
        </>
    )
}

export default ModalMaterial