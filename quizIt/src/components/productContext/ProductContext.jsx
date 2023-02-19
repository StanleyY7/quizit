import { createContext } from "react";

const ProductContext = createContext({
  setData: () => {},
  data: [],
});

export default ProductContext;
