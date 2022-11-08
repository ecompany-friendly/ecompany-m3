import { useEffect, useState } from "react";
import { useUserLoginContext } from "../../contexts/authContext";
import Api from "../../services/Api";

import { StyledUl, StyledLi, StyledImageProduct, StyledImageUser, StyledContainerCard, StyledContainerUser, StyledNameUser, StyledBtn, StyledContainer } from "./styles";

const ProductList = () => {

  const { user } = useUserLoginContext()


  const [product, setProduct] = useState([]);
  const [users, setUsers] = useState([]);

  const id = localStorage.getItem("@eCOMPANY:user_id")
  
  
  useEffect((el) => {
    
    const idUser = localStorage.getItem("@eCOMPANY:user_id")
    
    Api.get(`products`).then((response) => {
      setProduct(response.data);
    });

    Api.get(`users/?_embed=products`, idUser).then((response) => {
      setUsers(response.data)
    })
    .catch((err) => console.error(err))

  }, []);

  const handleClick = async (el) => {

    const newObj = {
      ...el, userId: id
    }

    await Api.post(`products`, newObj)

      setProduct(newObj)    
    // console.log(product)
  }

  const handleCollect = (el) => {

    const id = el.id
    
    Api.delete(`products/${id}`)
  
  }

  return (
    <StyledUl>
      <StyledContainer>
        {product.length > 0 ? (
          users.map((user) => (
            user.products.map((el) =>
              <StyledLi key={el.id}>
                <StyledImageProduct
                  onClick={() => handleClick(el)}
                  src={el.image} alt="" />
                <StyledContainerCard>
                  <StyledContainerUser>
                    <StyledImageUser src={user.image} alt="" />
                    <StyledNameUser>{user.name}</StyledNameUser>
                  </StyledContainerUser>
                  <StyledBtn
                    onClick={() => handleCollect(el)} 
                  >
                    coletar
                  </StyledBtn>
                </StyledContainerCard>
              </StyledLi>
            )))
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
