import { useEffect, useState } from "react";
import Api from "../../services/Api";
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

const ProductList = () => {
  const [product, setProduct] = useState([]);
  const [users, setUsers] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userCardModal, setUserCardModal] = useState({});

  useEffect(() => {
    const id = localStorage.getItem("@eCOMPANY:user_id");

    Api.get(`products`).then((response) => {
      console.log(response);
      setProduct(response.data);
    });

    Api.get(`users/?_embed=products`, id)
      .then((response) => {
        console.log(response);
        setUsers(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

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
        {product.length > 0 ? (
          users.map((user) =>
            user.products.map((el) => (
              <StyledLi key={el.id}>
                <StyledImageProduct src={el.image} alt="" />
                <StyledContainerCard>
                  <button
                    type="button"
                    onClick={(el) => openUserCardModal(el, user)}
                  >
                    <StyledContainerUser>
                      <StyledImageUser src={user.image} alt="" />
                      <StyledNameUser>{user.name}</StyledNameUser>
                    </StyledContainerUser>
                  </button>

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
