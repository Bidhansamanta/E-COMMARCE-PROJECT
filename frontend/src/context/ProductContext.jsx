import { createContext, useEffect, useState } from "react";

const ProductContext = createContext();

function ProductContextProvider({children}) {
  const [product, setProduct] = useState([]);

  async function getApi() {
    try {
      const res = await fetch(
        "http://localhost:8005/api/v1/product/all-products",
      );
      const data = await res.json();
      setProduct(data.allProducts);
    } catch (error) {
      console.log(`Error while creating fetching data ${error}`);
    }
  }

  useEffect(() => {
    getApi();
  }, []);

  return (
    <ProductContext.Provider value={product}>
      {children}
    </ProductContext.Provider>
  )
}


export {ProductContext, ProductContextProvider};