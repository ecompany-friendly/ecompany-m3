import { StyledDashboard, Profile, Elipse, Background } from "./styles";
import darkicon from "../../assets/Logo.svg";

import profile from "../../assets/blank-profile-picture-973460.svg";
import logout from "../../assets/Exit_1_.svg";
import addmaterial from "../../assets/Group.svg";
import lupapesquisa from "../../assets/Group(1).svg";
import elipse from "../../assets/Ellipse 1.svg";
import { StyledUserDataModal } from "../../components/UserDataModal/style";

import { UserDataModal } from "../../components/UserDataModal/UserDataModal";
import background from "../../assets/Rectangle 39.svg";

import ModalMaterial from "../../components/ModalMaterial";
import { useUserLoginContext } from "../../contexts/authContext";

import MaterialList from "../../components/ProductList";
import ProductList from "../../components/ProductList";
import { NewProduct } from "../../components/NewProduct";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import SearchInput from "../../components/SearchInput";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useUserLoginContext();
  const { modalOpen, lista } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  //const [user, setUser] = useState()
  const navigate = useNavigate();

  console.log(products);

  return (
    <>
      <StyledDashboard className="container">
        <ModalMaterial />
        <Elipse src={elipse} alt="imagem da elipse verde do fundo" />
        <Background />

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
                <Link to={"/profile"}>
                  <Profile
                    src={user.image}
                    alt="imagem do perfil do usuário logado"
                  ></Profile>
                </Link>
                <Link to={"/profile"}>{user.name}</Link>
              </div>
              <img src={logout} alt="imagem para fazer logout na conta" />
            </div>
            <div className="search">
              <SearchInput products={products} setFiltered={setFiltered} />

              {/* <input type="text" />
              <img
                className="lupa"
                src={lupapesquisa}
                alt="imagem da lupa de pesquisa para filtrar material"
              /> */}
              {/* <input type="text" />
              <img
                className="lupa"
                src={lupapesquisa}
                alt="imagem da lupa de pesquisa para filtrar material"
              /> */}
              <button type="button" className="newProduct" onClick={modalOpen}>
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

        <main className="box-cards">
          <ProductList filtered={filtered} setProducts={setProducts} />
        </main>
      </StyledDashboard>
    </>
  );
};

export default Dashboard;
