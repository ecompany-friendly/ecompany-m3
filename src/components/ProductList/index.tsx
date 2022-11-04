import { useContext } from "react";
import { ProductContext } from "../../contexts/DashContext";
// import { StyledCollectButton } from "../Button/styles";

import { StyledUl, StyledLi } from "./styles";

const ProductList = () => {
  const { product } = useContext(ProductContext);
  // console.log(product)
  return (
    <StyledUl>
      {product.length > 0 ? (
        product.map((el) => (
          <StyledLi>
            <img src={el.image} alt="" />
          </StyledLi>
        ))
      ) : (
        <div className="empty">
          <p>Materiais disponíveis em breve</p>
        </div>
      )}
    </StyledUl>
  );
};

export default ProductList;
