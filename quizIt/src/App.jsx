import "./App.css";
import ProductProvider from "./components/productProvider/productProvider";
import Main from "./containers/main/main";

const App = () => {
  return (
    <>
      <ProductProvider>
        <Main />
      </ProductProvider>
    </>
  );
};

export default App;
