import styled from "styled-components";

export const StyledDashboard = styled.section`
  background-color: var(--primary);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  z-index: 1;

  main {
    display: flex;
    z-index: 3;
  }

  h2 {
    display: flex;
  }

  .dash-nav {
    height: 25vh;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 5px;
    align-items: center;
    box-shadow: 0px 1px 0px 0px var(--white);
    position: absolute;
    z-index: 2;
    top: 30px;
    left: 10%;
    /* margin-top: 35px; */
  }

  .logo {
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    color: var(--secondary);
  }

  .interative {
    width: 80%;
    display: flex;
    flex-direction: column;
  }

  .user-info {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: var(--white);
  }

  .user {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
  }

  .user > h2 {
    color: var(--white);
  }

  .search {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .container {
    height: 75vh;
    width: 100%;
    /* background-color: palevioletred; */
  }

  @media (min-width: 600px) {
    .dash-nav {
      flex-direction: row;
      height: 10vh;
      width: 85%;
      left: 7.5%;
    }

    .logo {
      width: 30%;
      justify-content: flex-start;
      margin-left: 20px;
    }

    .interative {
      flex-direction: row-reverse;
    }

    .user {
      flex-direction: row-reverse;
      justify-content: center;
    }

    .search > input {
      width: 100%;
    }
  }
`;

export const Profile = styled.img`
  width: 40px; 
  height: 40px;
  border-radius: 15px;
`;
export const Elipse = styled.img`
  width: 100%;
  height: 70%;
`;
export const Background = styled.img`
  display: flex;
  width: 90vw;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: #000000;
  opacity: 0.45;
  position: absolute;
  margin: 0 auto;
  left: 5%;
  margin-top: 30px;
  border-radius: 10px;
`;
