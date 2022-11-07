import { useEffect, useState } from "react";
import Api from "../../services/Api";

import { StyledUl, StyledLi, StyledImageProduct, StyledImageUser, StyledContainerCard, StyledContainerUser, StyledNameUser, StyledBtn, StyledContainer } from "./styles";

const ProductList = () => {

  const [product, setProduct] = useState([]);
  const[users, setUsers]      = useState([]);

  useEffect(() => {
    Api.get("products").then((response) => {
      console.log(response);
      setProduct(response.data);
    });

    Api.get("users").then((response) => {
      console.log(response)
      setUsers(response.data)
    })
    .catch((err) => console.error(err))
  }, []);

  console.log(users)
  return (
    <StyledUl>
      <StyledContainer>
      {product.length > 0 ? (
        product.map((el) => (
            <StyledLi>
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
