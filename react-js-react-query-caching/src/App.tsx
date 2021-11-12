import React, { useState } from "react";
import { ProductDetail, ProductList } from "./components/Products";
import "./App.css";

function App() {
  const [productId, setProductId] = useState<number | null>(null);

  const onProductDetail = (id: number) => {
    setProductId(id);
  };

  const onBackToList = () => {
    setProductId(null);
  };

  return (
    <div className="App">
      {productId !== null ? (
        <ProductDetail id={productId} onBackToList={onBackToList} />
      ) : (
        <ProductList onProductDetail={onProductDetail} />
      )}
    </div>
  );
}

export default App;
