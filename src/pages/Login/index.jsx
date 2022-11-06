import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../contexts/authContext";
import { schemaLogin } from "../../validations/loginUser";
import { Container, Toggle, Company, FormStyle, BackgroundForm, DivWelcome, Logo } from "./styles";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import elipse from "../../assets/Ellipse 1.svg";
import ecology from "../../assets/Logo.svg";
import waste from "../../assets/Waste management-pana 2.svg";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from './theme';
import "./styles"
import Toggle from "../../components/Toggle";

const Login = () => {

  const { loadUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaLogin) });
  //<span>{errors.email?.message}</span>
  
  //<span>{errors.password?.message}</span>
    
  //<LoginStyle toggleThemeLogin={toggleThemeLogin}/>
const [theme, setTheme] = useState('dark');

const toggleTheme = () => {
  if (theme === 'dark') {
    setTheme('light');
  } else {
    setTheme('dark');
  }
}
  
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>

      <>
        <ToastContainer />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <BackgroundForm>
          <img className="elipse" src={elipse} alt="" />
  
          <div className="logo">
            <img className="logo-image" src={ecology} alt="" />
            <Logo>eCOMPANY Friendly</Logo>
          </div>
          <Container>
            <Company src={waste} alt="" />
            <FormStyle>
              <form onSubmit={handleSubmit(loadUser)}>
                <DivWelcome>
                  <h2 className="display">Bem vindo(a) de volta</h2>
                  <h2 className="display">Por favor, insira seus dados de login</h2>
                </DivWelcome>
  
                <input
                  type="text"
                  placeholder="Digite seu email"
                  {...register("email")}
                />
  
                <input
                  type="password"
                  placeholder="Digite sua senha"
                  {...register("password")}
                />
  
                <button type="submit">Entrar</button>
                <h2 className="account">Ainda não possui uma conta?</h2>
                <Link to={"/register"} className="link">
                  Cadastre-se
                </Link>
              </form>
            </FormStyle>
          </Container>
        </BackgroundForm>
      </>
    </ThemeProvider>
  );
};

export default Login;
