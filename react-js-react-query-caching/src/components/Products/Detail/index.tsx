import React from "react";
import Axios from "axios";
import { IProduct } from "../../types";
import { useQuery } from "react-query";

const fetchProduct = (id: number) => {
  return Axios.get(`http://localhost:3333/products/${id}`).then(
    (response) => response.data
  );
};

type IProductDetail = {
  id: number;
  onBackToList: () => void;
};

const ProductDetail = ({ id, onBackToList }: IProductDetail) => {
  const { data: product, isLoading } = useQuery<IProduct>(
    [`products/${id}`],
    () => fetchProduct(id)
  );

  if (isLoading || !product) {
    return <h1>Loading product ...</h1>;
  }

  return (
    <div className="container">
      <a href="#" onClick={() => onBackToList()}>
        Voltar a lista de produtos
      </a>

      <div className="row">
        <label>Id:</label>
        {product.id}
      </div>
      <div className="row">
        <label>Name:</label>
        {product.name}
      </div>
      <div className="row">
        <label>Price:</label>
        {product.price}
      </div>
      <div className="row">
        <label>Description:</label>
        {product.description}
      </div>
      <div className="row">
        <label>Image:</label>
        <img src={product.image} />
      </div>
    </div>
  );
};

export default ProductDetail;
