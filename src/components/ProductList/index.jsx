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

const ProductList = ({ filtered, setProducts }) => {
  const [product, setProduct] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const id = localStorage.getItem("@eCOMPANY:user_id");

    Api.get(`products`).then((response) => {
      console.log(response);
      setProduct(response.data);
      setProducts(response.data);
    });

    Api.get(`users/?_embed=products`, id)
      .then((response) => {
        console.log(response);
        setUsers(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <StyledUl>
      <StyledContainer>
        {filtered.length > 0 ? (
          filtered.map((el) => (
            <StyledLi key={el.id}>
              <StyledImageProduct src={el.image} alt="" />
              <StyledContainerCard>
                <StyledContainerUser>
                  <StyledImageUser src={filtered.image} alt="" />
                  <StyledNameUser>{filtered.name}</StyledNameUser>
                </StyledContainerUser>
                <StyledBtn>coletar</StyledBtn>
              </StyledContainerCard>
            </StyledLi>
          ))
        ) : product.length > 0 ? (
          users.map((user) =>
            user.products.map((el) => (
              <StyledLi key={el.id}>
                <StyledImageProduct src={el.image} alt="" />
                <StyledContainerCard>
                  <StyledContainerUser>
                    <StyledImageUser src={user.image} alt="" />
                    <StyledNameUser>{user.name}</StyledNameUser>
                  </StyledContainerUser>
                  <StyledBtn>coletar</StyledBtn>
                </StyledContainerCard>
              </StyledLi>
            ))
          )
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
