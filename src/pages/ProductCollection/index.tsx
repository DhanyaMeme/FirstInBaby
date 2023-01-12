import React from "react";
import { ProductsList } from "../../components/ProductCollection/ProductList";
import { products } from "../../mockData/productData";

export const ProductCollection = () => {
  return (
    <div className="CollectionMain">
      <div className="CollectionInner">
        <ProductsList ProductData={products} />
      </div>
    </div>
  );
};
