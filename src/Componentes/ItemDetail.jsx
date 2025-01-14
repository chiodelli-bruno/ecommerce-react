import React from 'react';
import ItemCount from './ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
  const handleAdd = (quantity) => {
    console.log(`Agregado ${quantity} ${product.name} al carrito`);
    // Aquí iría la lógica para agregar al carrito
  };

  return (
    <div className="item-detail">
      <h2>{product.name}</h2>
      <p className="price">Precio: ${product.price}</p>
      <p className="description">{product.description}</p>
      <ItemCount stock={10} initial={1} onAdd={handleAdd} />
    </div>
  );
};

export default ItemDetail;

