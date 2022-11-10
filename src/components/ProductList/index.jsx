import { useContext, useEffect, useState } from "react";
import Api from "../../services/Api";
import { AuthContext } from "../../contexts/authContext";
import { UserDataModal } from "../UserDataModal/UserDataModal";


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


  
  const ProductList = ({filtered, setProducts}) => {
    
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [userCardModal, setUserCardModal] = useState({});
  const [product, setProduct] = useState([]);
  const [users, setUsers] = useState([]);

  const id = localStorage.getItem("@eCOMPANY:user_id")

  useEffect(() => {

    Api.get(`products?status=true`).then((response) => {
     
      setProduct(response.data)
      setProducts(response.data);

    })
    .catch((err) => console.error(err))
  }, [id]);

  const handleClick = async (pr) => {
   
    const newObj = {

      ...pr, userId: Number(id), status: false
      
    }
 
    await Api.patch(`products/${pr.id}`, newObj)
    setProduct(product.filter((element) => element.id !== pr.id))
  }
  
  const openUserCardModal = (el, user) => {
    el.preventDefault();
    setUserCardModal(user);
    setModalIsOpen(true);
  };

  return (
    <StyledUl>
      <UserDataModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        user={userCardModal}
      />
      <StyledContainer>
        {filtered.length > 0 ? (
          filtered.map((el) => (
            <StyledLi key={el.id}>
              <StyledImageProduct src={el.image} alt="" />
              <StyledContainerCard>
                <StyledContainerUser>
                  <StyledImageUser src={el.image} alt="" />
                  <StyledNameUser>{el.name}</StyledNameUser>
                </StyledContainerUser>
                <StyledBtn onClick={() => handleClick(el)} >coletar</StyledBtn>
              </StyledContainerCard>
            </StyledLi>
          ))
        ) : product.length > 0 ? (
          product.map((el) =>
              <StyledLi key={el.id}>
                <StyledImageProduct src={el.image} alt="" />
                <StyledContainerCard>
                  <button
                    type="button"
                    onClick={(el) => openUserCardModal(el, product)}
                  >
                    <StyledContainerUser>
                      <StyledImageUser src={product.image} alt="" />
                      <StyledNameUser>{product.name}</StyledNameUser>
                    </StyledContainerUser>
                  </button>
                  <StyledBtn onClick={() => handleClick(el)} >coletar</StyledBtn>
                </StyledContainerCard>
              </StyledLi>
            )) : (
          <div className="empty">
            <p>Materiais disponíveis em breve</p>
          </div>
        )}
      </StyledContainer>
    </StyledUl>
  );
};

export default ProductList;
