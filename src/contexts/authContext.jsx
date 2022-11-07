import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Api from "../services/Api";

export const AuthContext = createContext();

// export interface iUser {

// }

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const notify = (message) => toast(message);

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
      notify("Acesso com sucesso");
      navigate("/dashboard");
    } catch (error) {
      notify(error);
    }
  }

  return (
    <AuthContext.Provider value={{ loadUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useUserLoginContext = () => useContext(AuthContext);

export default AuthProvider;
