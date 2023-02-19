import "./App.css";
import Main from "./containers/main/main";
import ProductProvider from "./components/productProvider/productProvider";

function App() {
  return (
    <ProductProvider>
      <section>
        <Main />
      </section>
    </ProductProvider>
  );
}

export default App;
