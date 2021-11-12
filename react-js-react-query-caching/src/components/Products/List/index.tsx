import React from "react";
import Axios from "axios";
import { IProduct } from "../../types";
import { useQuery } from "react-query";

const fetchProducts = () => {
  return Axios.get(`http://localhost:3333/products`).then(
    (response) => response.data
  );
};

interface IProductList {
  onProductDetail: (id: number) => void;
}

const ProductList = ({ onProductDetail }: IProductList) => {
  const { data: products, isLoading } = useQuery<IProduct[]>(["products"], () =>
    fetchProducts()
  );

  if (isLoading || !products) {
    return <h1>Loading products list ...</h1>;
  }

  return (
    <div className="container">
      <h1>Products List</h1>

      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Detail</td>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>
                <a href="#" onClick={() => onProductDetail(product.id)}>
                  Detail
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
