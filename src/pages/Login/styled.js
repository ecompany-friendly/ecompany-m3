import styled from "styled-components";

export const BackgroundForm = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  
  background-color: #0d0e0d;      
    
    .elipse {
    display: flex;
    min-width: 300px;
    width: 100vw;
    height: 80vh;
    position: absolute;
    z-index: 0;
    top: 0;
    margin-top: -20px;

  }

  .logo {
    display: flex;
    flex-direction: row;

    gap: 20px;
    align-items: center;

    position: absolute;
    top: 30px;
    left: 50px;

  }


    .logo-image {
      display: flex;
      min-width: 30px;
      max-width: 80px;
      width: 7vw;
    }

    .logo-text {
      display: flex;
      min-width: 200px;
      max-width: 450px;
      width: 25.915080527086385vw;
    }

  @media (max-width: 689px) {
    .logo {
      left: center;
    }
    .elipse {
      top: -200px;
      height: 35rem;
    }
    .display {
      display: none;
    }
    width: 100vw;
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

  min-height: 150px;

  max-width: 750px;
  min-width: 330px;
  width: 100vw;

  max-height: 85vh;

  margin-top: 100px;
  position: relative;
  margin-right: 380px;
  padding-right: 70px;

  @media (min-width: 689px) {
    height: 590px;
  }
`;

export const FormStyle = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 10vw;
  min-width: 300px;
  width: 340px;
  position: absolute;
  right: 10%;

  input {
    display: flex;
    min-height: 40px;
  }

  z-index: 1;
  
  border-radius: 8px;
  
  button {
    min-height: 45px;
    border-radius: 8px 8px 0 8px;
  }

  @media (min-width: 689px) {
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

    gap: 10px;

    padding: 20px 0;

    @media (max-width: 689px) {
      margin-top: 25px;
    }

    input {
      display: flex;

      max-width: 270px;
      min-width: 80%;
      width: 24vw;
      height: 30px;

      padding-left: 10px;

      border: none;
      background-color: #d9d9d9;

      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      border-bottom-left-radius: 8px;

      @media (max-width: 689px) {
        height: 45px;
      }
    }

    button {
      display: flex;
      border: none;

      align-items: center;
      justify-content: center;

      min-width: 83%;
      padding: 10px;

      height: 35px;

      margin-top: 15px;

      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      border-bottom-left-radius: 8px;

      background-color: #1a2e1f;
      color: white;

      @media (max-width: 689px) {
        height: 45px;
      }
    }

    .account {
      color: #5effa8;

      font-weight: 400;
      margin-top: 5px;
      font-size: medium;
    }

    .link {
      display: flex;
      border: none;

      align-items: center;
      justify-content: center;

      min-width: 83%;
      height: 45px;

      margin-top: 5px;

      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      border-bottom-left-radius: 8px;

      background-color: #1a2e1f;
      color: white;

      text-decoration: none;
    }
  }
`;

export const DivWelcome = styled.div`
  display: block;
  flex-direction: column;
  align-items: center;
  min-width: 80%;
  
  h2 {
    color: #FFF;
    font-weight: 300;
    margin-bottom: 30px;
  }
`

export const Logo = styled.h1`
  display: flex;
  color: #5EFFA8;
  font-weight: 700;
  font-size: 36px;
  margin-left: 50px;
`
