import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../contexts/authContext";
import { schemaLogin } from "../../validations/loginUser";
import { Main, Container, Company, FormStyle, BackgroundForm } from "./styled";
import { Link } from "react-router-dom";
import elipse from "../../assets/Ellipse 1.svg";
import ecology from "../../assets/Logo.svg";
import ecompany from "../../assets/eCOMPANY Friendly.png";
import waste from "../../assets/Waste management-pana 2.png";

const Login = () => {
  const { loadUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaLogin) });

  return (
    <>
      <BackgroundForm>
        <img className="elipse" src={elipse} alt="" />

        <div className="logo">
          <img className="logo-image" src={ecology} alt="" />
          <img className="logo-text" src={ecompany} alt="" />
        </div>
        <Container>
          <Company src={waste} alt="" />
          <FormStyle>
            <form onSubmit={handleSubmit(loadUser)}>
              <h2>Bem vindo de volta</h2>
              <h2>Por favor, insira seus dados de login</h2>

              <input
                type="text"
                placeholder="Digite seu email"
                {...register("email")}
              />
              <span>{errors.email?.message}</span>

              <input
                type="password"
                placeholder="Digite sua senha"
                {...register("password")}
              />
              <span>{errors.password?.message}</span>

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
  );
};

export default Login;
