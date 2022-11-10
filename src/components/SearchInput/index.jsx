import { useState } from "react";

const SearchInput = ({ setFiltered, products }) => {
  const [currentProduct, setCurrentProduct] = useState("");

  console.log(products);

  function getFilteredProducts(value) {
    setCurrentProduct(value);
    const filtered =
      value === "" || !value
        ? products
        : products?.filter((el) => {
            return (
              el.name
                .toLowerCase()
                .includes(currentProduct.trim().toLowerCase()) ||
              el.type
                .toLowerCase()
                .includes(currentProduct.trim().toLowerCase()) ||
              el.city
                .toLowerCase()
                .includes(currentProduct.trim().toLowerCase()) ||
              el.country
                .toLowerCase()
                .includes(currentProduct.trim().toLowerCase())
            );
          });

    console.log(filtered);
    setFiltered("");
    setFiltered(filtered);
  }

  return (
    <div>
      <input
        type="search"
        value={currentProduct}
        onChange={(event) => getFilteredProducts(event.target.value)}
      />
      <button onClick={getFilteredProducts}>Pesquisar</button>
    </div>
  );
};

export default SearchInput;
