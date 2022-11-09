import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Api from "../services/Api";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [openModalProduct, setOpenModalProduct] = useState(false);
  const [lista, setLista] = useState();

  useEffect(() => {
    async function loadingUser() {
      const token = localStorage.getItem("@eCOMPANY:token");

      if (token) {
        try {
          Api.defaults.headers.authorization = `Bearer ${token}`;

          const { data } = await Api.get("login");

          setUser(data);
        } catch (error) {
          console.log(error);
        }
      }
    }
    loadingUser();
  }, []);

  async function loadUser(data) {
    try {
      const response = await Api.post("/login", data);

      const { user: userResponse, accessToken } = response.data;

      localStorage.setItem("@eCOMPANY:token", accessToken);
      localStorage.setItem("@eCOMPANY:user_id", userResponse.id);

      setUser(userResponse);
      toast.success("Acesso com sucesso !", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      toast.error("Acesso inválido", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  async function newProduct(data) {
    const userId = localStorage.getItem("@eCOMPANY:user_id");
    try {
      const newData = { ...data, userId: Number(userId), status: true };
      await Api.post("/products", newData);
      setLista(newData);
      setOpenModalProduct(false);
    } catch (error) {
      console.log(error);
    }
  }

  const modalOpen = () => {
    setOpenModalProduct(true);
  };

  const modalClose = () => {
    setOpenModalProduct(false);
  };

  return (
    <AuthContext.Provider
      value={{
        loadUser,
        openModal,
        setOpenModal,
        openModalProduct,
        setOpenModalProduct,
        modalOpen,
        modalClose,
        newProduct,
        lista,
        setLista,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useUserLoginContext() {
  const context = useContext(AuthContext);

  return context;
}

export default AuthProvider;
