import { createContext, ReactElement, ReactNode, useState } from "react";
import Api from "../services/Api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { iEditMaterial } from "../modal/EditMaterial";

interface iUserProvider {
  children: ReactNode;
}

interface iLogin {
  email: string;
  password: string;
}

interface iUserContext {
  login: (data: iLogin) => void;
  formSubmit(data: iEditMaterial): Promise<void>;
  openModal(): void;
  closeModal(): void;
  modalIsOpen: boolean;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iUserProvider) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const token = localStorage.getItem("@eCOMPANY:token");
  const id = localStorage.getItem("@eCOMPANY:user_id");
  const navigate = useNavigate();

  const login = async (data: iLogin) => {
    try {
      const res = await Api.post("login", data);
      console.log(await res);
    } catch (error) {
      toast.error("Algo deu errado!");
    }
  };

  async function formSubmit(data: iEditMaterial): Promise<void> {
    console.log(data);
    try {
      Api.defaults.headers.authorization = `Bearer ${token}`;
      await Api.patch(`/products/${id}`, data);

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  }

  function openModal(): void {
    setModalIsOpen(true);
  }
  function closeModal(): void {
    setModalIsOpen(false);
  }

  return (
    <UserContext.Provider
      value={{
        login,
        openModal,
        closeModal,
        formSubmit,
        modalIsOpen,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
