import styled from "styled-components";

export const StyledDashboardProfile = styled.section`
  .search {
    width: 70%
  }
  .search input{
    width: 90%;
    margin: 0 5px 0 5px
  }
  aside{
    width: 80%;
    position: absolute;
    top: 190px;
    left: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid white;
  }
  .asideInfoUser {
    width: 180px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
    margin-bottom: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .imgNoBorder{
    border-radius: 0px;
  }
  .asideInfoUser > h2 {
    color: var(--white);
  }
  .box-cards{
    width: 100%;
    position: absolute;
    top: 340px;
    margin: 0 auto;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .card{
    min-width: 190px;
    height: 180px;
    margin: 5px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .card > img{
    width:100%;
    height: 140px;
  }
  .card-options{
    display: flex;
    justify-content: space-between;
  }
  .card-options > img{
    background-color: var(--primary);
    padding: 4px;
    border-radius: 5px;
    cursor: pointer;
  }
  @media (max-width: 600px) {
    .search{
      width: 100%;
    }
    .box-cards{
      flex-direction: row;
      max-width: 80%;
      left: 10%;
      height: 190px;
      overflow-y: scroll;
    }
    .search input{
      max-width: 60%;
      margin-left: -5px;
    }
    .lupa{
      position: relative;
      margin-left: -22%;
      border-left: 1px solid #000000;
      padding-left: 10px;
    }
  }
  @media (min-width: 600px) {
    .search{
      width: 80%;
    }
    .search input{
      max-width: 72%;
      margin-left: -5px;
    }
    .lupa{
      position: relative;
      margin-left: -16%;
      border-left: 1px solid #000000;
      padding-left: 10px;
    }
    aside{
      max-width: 25%;
      height: 70vh;
      top: 100px;
      left: 8%;
      border: none;
      border-right: 1px solid white;
    }
    .asideInfoUser {
      width: 90%;
    }
    .box-cards{
      max-width: 58%;
      top: 100px;
      left: 35%;
      flex-direction: row;
      flex-wrap: wrap;
      height: 70vh;
      overflow-y: auto;
    }
    .card{
        width: 180px;
        height: 160px;
        margin: 5px auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}
    @media (min-width: 850px) {
    aside{
        max-width: 22%;
    }
    .box-cards{
        width: 69%;
        left: 30%;
    }
}
    @media (min-width: 900px) {
    aside{
        max-width: 20%;
    }
}
`;