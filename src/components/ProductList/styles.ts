import styled from "styled-components";

export const StyledUl = styled.ul`
  height: 60vh;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 31%;
  left: 20%;

  @media (min-width: 600px) {
    height: 74vh;
    width: 79%;
    top: 17%;
    left: 10%;
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  > div > p {
    font-size: 16px;
    color: var(--white);
  }
`;

export const StyledLi = styled.li`
  background-color: var(--white);
  height: 140px;
  width: 185px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-left: 5px;
  cursor: pointer;

  @media (min-width: 600px) {
  }
  /* &:hover {
    background-color: var(--grey-3);
  } */
`;
