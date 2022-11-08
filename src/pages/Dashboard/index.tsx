import { StyledDashboard, Profile, Elipse, Background } from "./styles";
import darkicon from "../../assets/Logo.svg";

import profile from "../../assets/blank-profile-picture-973460.svg";
import logout from "../../assets/Exit_1_.svg";
import addmaterial from "../../assets/Group.svg";
import lupapesquisa from "../../assets/Group(1).svg";
import elipse from "../../assets/Ellipse 1.svg";
import background from "../../assets/Rectangle 39.svg";

import { StyledUserDataModal } from "../../components/UserDataModal/style";
import { UserDataModal } from "../../components/UserDataModal/UserDataModal";

import MaterialList from "../../components/ProductList";
import ProductList from "../../components/ProductList";
import { NewProduct } from "../../components/NewProduct";

const Dashboard = () => {
  const teste = () => {
    alert("sfjsdfb");
  };

  return (
    <>
      <StyledDashboard>
        <Elipse src={elipse} alt="imagem da elipse verde do fundo" />
        <nav className="dash-nav">
          <div className="logo">
            <img
              src={darkicon}
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
              <img src={logout} alt="imagem para fazer logout na conta" />
            </div>
            <div className="search">
              <input type="text" />
              <img
                className="lupa"
                src={lupapesquisa}
                alt="imagem da lupa de pesquisa para filtrar material"
              />
              <button type="button" className="newProduct" onClick={teste}>
                <img
                  src={addmaterial}
                  alt="imagem para publicar novo material"
                />

              </button>
              </div>
            </div>
          </nav>
          <div className="modals">
            <UserDataModal />
          </div>
        <NewProduct />
        <ProductList />
      </StyledDashboard>
    </>
  );
};

export default Dashboard;
