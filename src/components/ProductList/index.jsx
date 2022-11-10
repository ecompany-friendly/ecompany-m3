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
import { toast } from "react-toastify";
import ModalMaterial from "../ModalMaterial";

const ProductList = ({ filtered, setProducts }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userCardModal, setUserCardModal] = useState({});
  const [product, setProduct] = useState([]);
  const [users, setUsers] = useState([]);
  const [modalMaterialIsOpen, setModalMaterialIsOpen] = useState(false);
  const [productClick, setProductClick] = useState();

  const id = localStorage.getItem("@eCOMPANY:user_id");

  useEffect(() => {
    Api.get(`products?status=true`)
      .then((response) => {
        setProduct(response.data);
        // setProducts(response.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  setProducts(product);
  const handleClick = async (pr) => {
    const newObj = {
      ...pr,
      userId: Number(id),
      status: false,
    };

    await Api.patch(`products/${pr.id}`, newObj);
    setProduct(product.filter((element) => element.id !== pr.id));
  };

  const openUserCardModal = async (el, product) => {
    console.log(product.userId);
    el.preventDefault();

    const user = await Api.get(`/users/${product.userId}`)
      .then((res) => res.data)
      .catch((err) => toast.error("Algo deu errado"));
    console.log(user);

    setModalIsOpen(true);
    setUserCardModal(user);
  };

  const openModalMaterial = (el) => {
    setProductClick(el);
    setModalMaterialIsOpen(true);
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

      <ModalMaterial
        modalMaterialIsOpen={modalMaterialIsOpen}
        setModalMaterialIsOpen={setModalMaterialIsOpen}
        productClick={productClick}
      />

      {filtered.length > 0 ? (
        filtered.map((product) => (
          <StyledLi key={product.id}>
            <StyledImageProduct src={product.image} alt="" />
            <StyledContainerCard>
              <StyledContainerUser>
                <button onClick={(el) => openUserCardModal(el, product)}>
                  <StyledImageUser src={product.image} alt="" />
                  <StyledNameUser>{product.name}</StyledNameUser>
                </button>
              </StyledContainerUser>
              <StyledBtn onClick={() => handleClick(product)}>
                coletar
              </StyledBtn>
            </StyledContainerCard>
          </StyledLi>
        ))
      ) : product.length > 0 ? (
        users.map((user) =>
          user.products.map((product) => (
            <StyledLi key={product.id}>
              <StyledImageProduct
                onClick={() => openModalMaterial(product)}
                src={product.image}
                alt=""
              />
              <StyledContainerCard>
                <StyledContainerUser>
                  <button onClick={(el) => openUserCardModal(el, product)}>
                    <StyledImageUser src={product.image} alt="" />
                    <StyledNameUser>{product.name}</StyledNameUser>
                  </button>
                </StyledContainerUser>
                <StyledBtn onClick={() => handleClick(product)}>
                  coletar
                </StyledBtn>
              </StyledContainerCard>
            </StyledLi>
          ))
        )
      ) : (
        <div className="empty">
          <p>Materiais disponíveis em breve</p>
        </div>
      )}
    </StyledUl>
  );
};

export default ProductList;
