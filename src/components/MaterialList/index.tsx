// import { useContext } from "react";
// import { MaterialContext } from "../../contexts/MaterialContext";
// import { StyledAddOrRemoveButton } from "../Button/styles";
// import { useContext } from "react";
// import { UserContext } from "../../contexts/userContext";
import { StyledUl, StyledLi } from "../ProductList/styles";

const MaterialList = () => {
  //   const { material, deleteMaterial } = useContext(MaterialContext);
  // const { openModal } = useContext(UserContext)

  return (
    <StyledUl>
      {/* {material.length > 0 ? ( */}
      <StyledLi>
        <img src="" alt="" />
        <h2>nome</h2>
        <div>
          {/* <button onClick={openModal}>abrir</button> <-- para abrir o modal*/}
          {/* <StyledCollectButton onClick={() => deleteMaterial(el)}>
                coletar
              </StyledCollectButton> */}
        </div>
      </StyledLi>
      {/* )) */}
      {/* ) : ( */}
      <p>Adicione Tecnologias</p>
      {/* )}  */}
    </StyledUl>
  );
};

export default MaterialList;