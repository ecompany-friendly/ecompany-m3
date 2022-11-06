import { useContext } from "react";
import { ProductContext } from "../../contexts/DashContext";
// import { StyledCollectButton } from "../Button/styles";

import { StyledUl, StyledLi } from "./styles";

const ProductList = () => {
  const { product, renderProduct } = useContext(ProductContext);
  console.log(product, renderProduct);
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
          <button onClick={renderProduct}>chamar function</button>
        </div>
      )}
    </StyledUl>
  );
};

export default ProductList;
