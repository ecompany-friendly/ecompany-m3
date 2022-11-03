import styled from "styled-components";

export const BackgroundForm = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  height: 100vh;

  background-color: #0d0e0d;

  @media (max-width: 689px) {
  }

  .elipse {
    display: flex;
    min-width: 300px;
    width: 68.52708638360176vw;
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
  }

  .logo {
    display: flex;
    flex-direction: row;

    gap: 20px;
    align-items: center;

    position: absolute;
    top: 30px;

    .logo-image {
      display: flex;
      min-width: 30px;
      max-width: 80px;
      width: 7.101024890190336vw;
    }

    .logo-text {
      display: flex;
      min-width: 200px;
      max-width: 450px;
      width: 25.915080527086385vw;
    }
  }

  @media (min-width: 689px) {
    .logo {
      left: 30px;
    }
  }
`;

export const Container = styled.div`
  @media (min-width: 689px) {
    display: flex;

    align-items: center;
    justify-content: space-around;

    width: 100vw;
  }
`;

export const Company = styled.img`
  display: flex;

  min-height: 150px;
  height: 28.38vh;

  max-width: 750px;
  min-width: 330px;
  width: 52.08vw;

  margin-top: 20px;
  position: relative;

  @media (min-width: 689px) {
    height: 590px;
  }
`;

export const FormStyle = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  min-width: 300px;
  max-width: 350px;
  width: 100%;

  z-index: 1;

  border-radius: 8px;

  @media (min-width: 689px) {
    height: 455px;
    background-color: rgba(34, 95, 62, 0.7);
  }

  div {
    display: flex;
    max-width: 284px;
    min-width: 280px;
    width: 24vw;
    z-index: 1;

    margin-top: 15px;

    justify-content: end;

    button {
      width: 78px;
      height: 25px;
      border-radius: 8px;
      background: #5effa8;

      font-size: 15px;
      font-weight: 700;

      border: none;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    z-index: 1;

    align-items: center;

    input {
      display: flex;

      max-width: 284px;
      min-width: 280px;
      width: 24vw;
      height: 30px;

      margin-top: 15px;

      border: none;
      background-color: #d9d9d9;

      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      border-bottom-left-radius: 8px;

      @media (min-width: 689px) {
        height: 45px;
      }
    }

    button {
      display: flex;
      border: none;

      align-items: center;
      justify-content: center;

      min-width: 280px;
      height: 35px;

      margin-top: 15px;

      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      border-bottom-left-radius: 8px;

      background-color: #1a2e1f;
      color: white;

      @media (min-width: 689px) {
        height: 45px;
      }
    }
  }
`;
