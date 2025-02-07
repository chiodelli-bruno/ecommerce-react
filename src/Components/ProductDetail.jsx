import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();

  return (
    <div className="product-detail">
      <h2>Detalles del Producto: {productId}</h2>
      {/* Aquí irán los detalles del producto */}
    </div>
  );
};

export default ProductDetail;

