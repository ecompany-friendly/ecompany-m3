// import MaterialList from "../../components/MaterialList";
import { StyledDashboard, Profile, Elipse } from "./styles";
// import darkicon from "../../assets/ecology-maps-and-location-svgrepo-com 1.svg";
import profile from "../../assets/blank-profile-picture-973460.svg";
import logout from "../../assets/Exit_1_.svg";
import addmaterial from "../../assets/Group.svg";
import lupapesquisa from "../../assets/Group(1).svg";
import elipse from "../../assets/Ellipse 1.svg";
// import Background from "../../assets/Rectangle 39.svg";
import { StyledUserDataModal } from "../../components/UserDataModal/style";
import { UserDataModal } from "../../components/UserDataModal/UserDataModal";
import { Navigate, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const getOut = () => {
    window.localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <StyledDashboard>
        <Elipse src={elipse} alt="imagem da elipse verde do fundo" />
        {/* <Background src={background} alt="fundo preto" /> */}
        <div className="container">
          <nav className="dash-nav">
            <div className="logo">
              <img
                // src={darkicon}
                alt="imagem da logo em modo escuro da ecompany friendly"
              />
              <h1>eCOMPANY friendly</h1>
            </div>
            <div className="interative">
              <div className="user-info">
                <div className="user">
                  <Profile
                    src={profile}
                    alt="imagem do perfil do usuário logado"
                  ></Profile>
                  <h2>Nicolly Alves</h2>
                </div>
                <button className="logout" onClick={getOut}>
                  <img src={logout} alt="imagem para fazer logout na conta" />
                </button>
              </div>
              <div className="search">
                <input type="text" />
                <img
                  className="lupa"
                  src={lupapesquisa}
                  alt="imagem da lupa de pesquisa para filtrar material"
                />
                <img
                  src={addmaterial}
                  alt="imagem para publicar novo material"
                />
              </div>
            </div>
          </nav>
          <main>ul</main>
        </div>
      </StyledDashboard>
    </>
  );
};

export default Dashboard;
