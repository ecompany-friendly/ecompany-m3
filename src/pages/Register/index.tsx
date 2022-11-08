import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  BackgroundForm as Main,
  Company,
  Container,
  FormStyle as Div,
} from "./styles";
import elipse from "../../assets/Ellipse 1.svg";
import ecology from "../../assets/Logo.svg";
import ecompany from "../../assets/eCOMPANY Friendly.svg";
import waste from "../../assets/Waste management-pana 2.svg";
import { schema } from "../../validations/registerUser";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { RegisterContext } from "../../contexts/registerContext";

export interface iUserRegister {
  name: string;
  email: string;
  password: string;
  checkPassword?: string;
  tellphone: string;
}

const Register = () => {
  const { registerUser } = useContext(RegisterContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserRegister>({
    resolver: yupResolver(schema),
  });

  return (
    <Main>
      <ToastContainer />
      <img
        className="elipse"
        src={elipse}
        alt="Imagem de fundo meia lua verde"
      />

      <div className="logo">
        <img
          className="logo-image"
          src={ecology}
          alt="Logotipo da eCOMPANY friendly"
        />
        <img className="logo-text" src={ecompany} alt="eCOMPANY friendly" />
      </div>
      <Container>
        <Company src={waste} alt="Personagens fazendo a reciclagem" />
        <Div>
          <div>
            <Link to={"/"}>Voltar</Link>
          </div>
          <form onSubmit={handleSubmit(registerUser)}>
            <input
              type="text"
              placeholder="Digite seu nome"
              {...register("name")}
            />
            <span>{errors.name?.message}</span>
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
            <input
              type="password"
              placeholder="Confirme sua senha"
              {...register("checkPassword")}
            />
            <span>{errors.checkPassword?.message}</span>
            <input
              type="text"
              placeholder="Digite seu contato"
              {...register("tellphone")}
            />
            <span>{errors.tellphone?.message}</span>

            <button type="submit">Cadastre-se</button>
          </form>
        </Div>
      </Container>
    </Main>
  );
};

export default Register;
