import { createContext, ReactElement, ReactNode, useState } from "react";
import Api from "../services/Api";
import { toast } from "react-toastify";

interface iUserProvider {
  children: ReactNode;
}

interface iLogin {
  email: string;
  password: string;
}

interface iRegister {
  name: string;
  email: string;
  image: string;
  password: string;
  tellphone: string;
}

interface iUserContext {
  login: (data: iLogin) => void;
  openModal(): void;
  closeModal(): void;
  modalIsOpen: boolean;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iUserProvider) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const login = async (data: iLogin) => {
    try {
      const res = await Api.post("login", data);
      console.log(await res);
    } catch (error) {
      toast.error("Algo deu errado!");
    }
  };

  const register = async (data: iRegister) => {
    try {
      const res = await Api.post("/register", data);
      console.log(await res);
    } catch (error) {
      toast.error("Algo deu errado");
    }
  };

  function openModal(): void {
    setModalIsOpen(true);
  }
  function closeModal(): void {
    setModalIsOpen(false);
  }

  return (
    <UserContext.Provider value={{ login, openModal, closeModal, modalIsOpen }}>
      {children}
    </UserContext.Provider>
  );
};
