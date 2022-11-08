/*import { useState } from "react";

const SearchInput = ({ setFiltered, products }) => {
  const [currentProduct, setCurrentProduct] = useState("");

  console.log(products);
  console.log(currentProduct);
  function getFilteredProducts() {
    return setFiltered(
      products?.filter((el) => {
          el.name.toLowerCase().includes(currentProduct.trim().toLowerCase()) ||
          el.type.toLowerCase().includes(currentProduct.trim().toLowerCase()) ||
          el.city.toLowerCase().includes(currentProduct.trim().toLowerCase()) ||
          el.country.toLowerCase().includes(currentProduct.trim().toLowerCase())
      })
    );
  }

  return (
    <div>
      <input
        type="search"
        value={currentProduct}
        onChange={(event) => setCurrentProduct(event.target.value)}
      />
      <button onClick={getFilteredProducts}>Pesquisar</button>
    </div>
  );
};*/

export default SearchInput;
