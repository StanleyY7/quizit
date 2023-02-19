import { useState } from "react";

import ProductContext from "../productContext/ProductContext";

const ProductProvider = (props) => {
  const [data, setData] = useState([]);
  const contextValue = { data, setData };
  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
