import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api/products';
import ItemDetail from './ItemDetail';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProductById(itemId).then(data => {
      setProduct(data);
      setLoading(false);
    });
  }, [itemId]);

  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  return (
    <div className="item-detail-container">
      {product ? <ItemDetail product={product} /> : <p>Producto no encontrado</p>}
    </div>
  );
};

export default ItemDetailContainer;

