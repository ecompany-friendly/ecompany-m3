import styled from "styled-components"
import Modal from "react-modal"

export const StyledModal = styled(Modal)`

    

    animation: appearFromTopLeft 1s;

    @keyframes appearFromTopLeft {
        0% {
            opacity: 0;
            transform: translate(-30%, -30%);
        }

        100% {
            opacity: 1;
            transform: translate(10, 10);

        }
    }
`

export const ContainerModal = styled.div`
        color: #142518;
        width: 313px;
        height: 277px;
        padding-left: 20px;
        border-radius: 9px;
        background-color: #141414;
`

export const BtnClose = styled.button`
        position: relative;
        top: -45px;
        left: 280px;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background-color: #141414;

        :hover {
        background-color: #181818;
    }
`

export const TitleModal = styled.h2`
        font-size: 22px;
        color: #FFFFFF;
        text-align: center;
        margin-bottom: 30px;
`

export const ContainerImgName = styled.span`
         width: max-content;
        display: flex;
        align-items: center;
        margin-bottom: 20px;   
`

export const ImageModal = styled.img`
         width: 61px;
        height: 61px;
        border: 1px solid white;
        border-radius: 10px;
        margin-right: 20px; 
`

export const NameModal = styled.p`
        width: max-content;
        font-size: 22px;
        color: #FFFFFF;   
`

export const ContentModal = styled.p`
        font-size: 22px;
        color: #FFFFFF;
        margin-bottom: 20px;
`