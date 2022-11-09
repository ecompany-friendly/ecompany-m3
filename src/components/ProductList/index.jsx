import { useEffect, useState } from "react";
import Api from "../../services/Api";

import { StyledUl, StyledLi, StyledImageProduct, StyledImageUser, StyledContainerCard, StyledContainerUser, StyledNameUser, StyledBtn, StyledContainer } from "./styles";

const ProductList = () => {
  
  const [product, setProduct] = useState([]);
  const [users, setUsers]     = useState([]);
   
  const id = localStorage.getItem("@eCOMPANY:user_id")

  useEffect(() => {

    // Api.get(`products`).then((response) => {
    //   setProduct(response.data);
    // });

    Api.get(`products?status=true`).then((response) => {
     
      setProduct(response.data)
    })
    .catch((err) => console.error(err))
  }, [id]);

  const handleClick = async (pr) => {
 
    // const { id } = el

    // Api.delete(`products/${id}`)

    // delete pr.id
   
    const newObj = {

      ...pr, userId: Number(id), status: false
      
    }
 
    await Api.patch(`products/${pr.id}`, newObj)
    setProduct(product.filter((element) => element.id !== pr.id))
  }
  
  return (
    <StyledUl>
      <StyledContainer>
      {/*{filtered.length > 0 && console.log(filtered)}*/}
      {product.length > 0 ? (
        product.map((pr) => (
         
            <StyledLi key={pr.id}>
              <StyledImageProduct 
                src={pr.image} 
                alt="" />
              <StyledContainerCard>
                <StyledContainerUser>
                  <StyledImageUser 
                    src={pr.image} 
                    alt="" 
                  />
                  <StyledNameUser>{pr.name}</StyledNameUser>
                </StyledContainerUser>
                <StyledBtn
                onClick={() => handleClick(pr)}
                  
                >
                  coletar
                </StyledBtn>
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
