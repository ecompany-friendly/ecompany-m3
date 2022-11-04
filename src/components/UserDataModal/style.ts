import styled from "styled-components";
import Modal from "react-modal";

export const StyledUserDataModal = styled(Modal)`
  .container {
    width: 90%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    button {
      width: 33px;
      position: absolute;
      top: -30px;
      right: 20px;
      font-size: 33px;
      color: var(--grey-1);
    }
  }
  .content {
    color: var(--white);
    border-radius: 10px;
    background-color: var(--grey-1);
    width: 90%;
    height: 90%;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .userName {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    }

    .dataContainer {
      width: 90%;

      .userData {
        width: 100%;
        height: 122px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 10px;
        font-size: 1.125rem;
      }
    }

    img {
      width: 50px;
    }
    h2 {
      color: var(--white);
    }
  }
`;
