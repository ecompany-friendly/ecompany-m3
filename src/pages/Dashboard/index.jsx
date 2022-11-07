import { StyledDashboard, Profile, Elipse, Background } from "./styles";
import darkicon from "../../assets/Logo.svg";
import profile from "../../assets/blank-profile-picture-973460.svg";
import logout from "../../assets/Exit_1_.svg";
import addmaterial from "../../assets/Group.svg";
import lupapesquisa from "../../assets/Group(1).svg";
import elipse from "../../assets/Ellipse 1.svg";
import background from "../../assets/Rectangle 39.svg";
import ProductList from "../../components/ProductList";
import { /* useEffect, */ useState } from "react";
import Api from "../../services/Api";
import { useUserLoginContext } from "../../contexts/authContext";

const Dashboard = () => {
  // const [users, setUsers] = useState([]); array vazio
  // const [users, setUsers] = useState(); undefined
  const [users, setUsers] = useState([]);
  const { user } = useUserLoginContext();

  // useEffect(() => {
  //   Api.get("users")
  //     .then((response) => {
  //       console.log(response);
  //       setUsers(response.data);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);
  console.log(users);

  // useEffect(() => {
  //   async function getUser() {
  //     const token = localStorage.getItem("@eCOMPANY:token");
  //     // Api.get("login").then((response) => {
  //     //   console.log(response);
  //     // });
  //     if (token) {
  //       try {
  //         Api.defaults.headers.authorization = `Bearer ${token}`;

  //         const response = await Api.get("login");
  //         console.log(response);

  //         setUsers(response.user);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //   }
  //   getUser();
  // }, []);

  const getUser = async (id) => {
    const token = localStorage.getItem("@eCOMPANY:token");
    // Api.get("login").then((response) => {
    //   console.log(response);
    // });
    // if (token) {
    try {
      // Api.defaults.headers.authorization = `Bearer ${token}`;

      const response = await Api.get(`users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("users:", response);

      setUsers(response.user);
    } catch (error) {
      console.log(error);
    }
    // }
  };
  getUser(6);
  // const id = localStorage.getItem("@eCOMPANY:user_id");

  return (
    <>
      <StyledDashboard>
        <Background src={background} alt="fundo preto" />
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
                <h2>{user.name}</h2>
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
              <img src={addmaterial} alt="imagem para publicar novo material" />
            </div>
          </div>
        </nav>
        <ProductList />
      </StyledDashboard>
    </>
  );
};

export default Dashboard;
