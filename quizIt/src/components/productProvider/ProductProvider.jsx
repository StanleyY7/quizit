import { useState } from "react";
import ProductContext from "../productContext/ProductContext";

const ProductProvider = () => {
  const [data, setData] = useState([]);
  const contextValue = { data, setData };
  return (
    <ProductContext.Provider value={contextValue}></ProductContext.Provider>
  );
};

export default ProductProvider;
