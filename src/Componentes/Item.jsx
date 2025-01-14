import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ product }) => {
  return (
    <div className="item">
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <Link to={`/item/${product.id}`} className="item-link">Ver detalle</Link>
    </div>
  );
};

export default Item;

