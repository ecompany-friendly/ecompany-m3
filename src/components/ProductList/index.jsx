import { useEffect, useState } from "react";
import Api from "../../services/Api";

import {
  StyledUl,
  StyledLi,
  StyledImageProduct,
  StyledImageUser,
  StyledContainerCard,
  StyledContainerUser,
  StyledNameUser,
  StyledBtn,
  StyledContainer,
} from "./styles";

const ProductList = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    Api.get("products").then((response) => {
      console.log("produtos", response);
      setProduct(response.data);
    });
  }, []);

  return (
    <StyledUl>
      <StyledContainer>
        {product.length > 0 ? (
          product.map((el, index) => (
            <StyledLi key={index}>
              <StyledImageProduct src={el.image} alt="" />
              <StyledContainerCard>
                <StyledContainerUser>
                  <StyledImageUser src="" alt="" />
                  <StyledNameUser>Lucas Lara</StyledNameUser>
                </StyledContainerUser>
                <StyledBtn>coletar</StyledBtn>
              </StyledContainerCard>
            </StyledLi>
          ))
        ) : (
          <div className="empty">
            <p>Materiais disponíveis em breve</p>
          </div>
        )}
      </StyledContainer>
    </StyledUl>
  );
};

export default ProductList;
