import React from 'react';
import { useParams } from 'react-router-dom';

const ProductList = () => {
  const { categoryId } = useParams();

  return (
    <div className="product-list">
      <h2>Productos en la categoría: {categoryId}</h2>
      {}
    </div>
  );
};

export default ProductList;

