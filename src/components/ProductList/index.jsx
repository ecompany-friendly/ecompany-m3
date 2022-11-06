import { useContext, useEffect, useState } from "react";
import Api from "../../services/Api";

import { StyledUl, StyledLi } from "./styles";

const ProductList = () => {
  const [product, setProduct] = useState(null);
  console.log(product)

  useEffect(() => {
    Api.get("products").then((response) => {
      console.log(response);
      setProduct(response.data);
    });
  }, []);


  return (
    <StyledUl>
      {product.length > 0 ? (
        product.map((el) => (
          <StyledLi>
            <img src={el.image} alt="" />
            <h2>{el.name}</h2>
            <h3>{el.type}</h3>
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
