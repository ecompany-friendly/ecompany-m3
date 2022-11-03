import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../services/Api";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadingUser() {
      const token = localStorage.getItem("@eCOMPANY:token");

      if (token) {
        try {
          Api.defaults.headers.authorization = `Bearer ${token}`;

          const { data } = await Api.get("/login");

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
      console.log(response);
      const { user: userResponse, accessToken } = response.data;

      console.log(userResponse);
      localStorage.setItem("@eCOMPANY:token", accessToken);
      localStorage.setItem("@eCOMPANY:user_id", userResponse.id);

      setUser(userResponse);

      navigate("/homepage");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AuthContext.Provider value={{ loadUser }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
