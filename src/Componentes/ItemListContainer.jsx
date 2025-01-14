import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../api/products';
import ItemList from './ItemList';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchProducts = categoryId ? getProductsByCategory(categoryId) : getProducts();
    
    fetchProducts.then(data => {
      setProducts(data);
      setLoading(false);
    }).catch(error => {
      console.error("Error fetching products:", error);
      setLoading(false);
    });
  }, [categoryId]);

  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  return (
    <div className="item-list-container">
      <h2>{categoryId ? `Categoría: ${categoryId}` : 'Todos los productos'}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

