import { createContext, useState, useEffect } from "react";
import { data } from "../components/data";

export const Context = createContext();

export function ContextProvider(props) {
  const [products, setProducts] = useState([]);

  /*
    useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('https://my-api.com/products');
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  */
  function createProduct(product) {
    setProducts([
      ...products,
      {
        id: products.length,
        item: product.item,
        piece: product.piece,
        description: product.description,
        presentation: product.presentation,
      },
    ]);
  }

  function deleteProduct(productsId) {
    setProducts(products.filter((product) => product.id !== productsId));
  
    }

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <Context.Provider
      value={{
        products,
        createProduct,
        deleteProduct,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
