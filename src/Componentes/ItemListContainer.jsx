import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{greeting}</h2>
      <p>Aquí se mostrará el catálogo de productos próximamente.</p>
    </div>
  );
};

export default ItemListContainer;

