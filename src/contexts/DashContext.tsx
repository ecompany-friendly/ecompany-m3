import { createContext, Dispatch, ReactNode, useState } from "react";
import Api from "../services/Api";

interface iProductProviderProps {
  children: ReactNode;
  renderProduct: any;
  setProduct: any;
}

export interface iProduct {
  userId: number;
  name: string;
  type: string;
  weight: number | null;
  city: string;
  country: string;
  image: string;
  id: number;
}

export interface iUser {
  email: string;
  password: string;
  name: string;
  tellphone: string;
  id: number;
  products: iProduct[];
}

interface iProductContext {
  renderProduct: (data: iProduct) => Promise<void>;
  //   collectProduct: (data: iIdProduct) => Promise<void>;
  product: iProduct[];
  setProduct: Dispatch<React.SetStateAction<iProduct[]>>;
}

export const ProductContext = createContext({} as iProductContext);
export const ProductProvider = ({ children }: iProductProviderProps) => {
  const [product, setProduct] = useState<iProduct[]>([]);

  async function renderProduct(data: iProduct) {
    console.log(data);
    try {
      const token = localStorage.getItem("KenzieHubToken");

      console.log(product);
      Api.defaults.headers.authorization = `Bearer ${token}`;
      const apiResponse = await Api.get("users/userId");
      setProduct([...product, apiResponse.data]);
    } catch (error) {
      console.error(error);
    }
  }

  // const { Product, collectProduct } = useContext(ProductContext);

  return (
    <ProductContext.Provider
      value={{
        product,
        renderProduct,
        setProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
