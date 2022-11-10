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
      //setProducts(response.data);

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

  useEffect(() => {
    const id = localStorage.getItem("@eCOMPANY:user_id");

    Api.get(`users/?_embed=products`, id)
      .then((response) => {
        console.log(response);
        setUsers(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <StyledUl>
      <UserDataModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        user={userCardModal}
      />
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
          )) : (
          <div className="empty">
            <p>Materiais disponíveis em breve</p>
          </div>
        )}
    </StyledUl>
  );
};

export default ProductList;
