import { useForm } from "react-hook-form";
import {
  BackgroundForm as Main,
  Company,
  Container,
  FormStyle as Div,
} from "./styles";
import elipse from "../../images/Ellipse.svg";
import ecology from "../../images/ecology-maps.svg";
import ecompany from "../../images/ecompany-friendly.svg";
import waste from "../../images/waste-management.svg";
import { schema } from "../../validations/registerUser";
import { yupResolver } from "@hookform/resolvers/yup";
import Api from "../../services/Api";

interface iUserRegister {
  name: string;
  email: string;
  password: string;
  checkPassword?: string;
  tellphone: string;
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserRegister>({
    resolver: yupResolver(schema),
  });

  function registerUser(data: iUserRegister): void {
    console.log(data);
    delete data.checkPassword;

    Api.post("/register", data)
      .then(() => console.log("tudo ok"))
      .catch((error) => console.error(error));
  }

  return (
    <Main>
      <img className="elipse" src={elipse} alt="" />

      <div className="logo">
        <img className="logo-image" src={ecology} alt="" />
        <img className="logo-text" src={ecompany} alt="" />
      </div>
      <Container>
        <Company src={waste} alt="" />
        <Div>
          <div>
            <button>Voltar</button>
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
