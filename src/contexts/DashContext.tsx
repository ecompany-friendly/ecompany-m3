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
  renderProduct: () => Promise<void>;
  //   collectProduct: (data: iIdProduct) => Promise<void>;
  product: iProduct[];
  setProduct: Dispatch<React.SetStateAction<iProduct[]>>;
}
console.log("oi");

export const ProductContext = createContext({} as iProductContext);
export const ProductProvider = ({ children }: iProductProviderProps) => {
  const [product, setProduct] = useState<iProduct[]>([]);

  async function renderProduct() {
    try {
      // const token = localStorage.getItem("KenzieHubToken");

      console.log(product);
      // Api.defaults.headers.authorization = `Bearer ${token}`;
      const ApiResponse = await Api.get<iProduct>("products");
      console.log("resposta da api:", ApiResponse);
      setProduct([...product, ApiResponse.data]);
    } catch (error) {
      console.error(error);
    }
  }
  // renderProduct(product);

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
