import React, { useEffect, useState } from "react";
import Axios from "axios";
import { IProduct } from "../../types";

const fetchProducts = () => {
  return Axios.get(`http://localhost:3333/products`).then(
    (response) => response.data
  );
};

interface IProductList {
  onProductDetail: (id: number) => void;
}

const ProductList = ({ onProductDetail }: IProductList) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    fetchProducts()
      .then((data) => setProducts(data))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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
