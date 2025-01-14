export const products = [
    {
      id: '1',
      name: 'Smartphone XYZ',
      description: 'Último modelo con la mejor tecnología',
      price: 999.99,
      category: 'electronics',
      stock: 10,
      image: '/placeholder.svg'
    },
    {
      id: '2',
      name: 'Laptop Pro',
      description: 'Perfecta para trabajo y gaming',
      price: 1299.99,
      category: 'electronics',
      stock: 5,
      image: '/placeholder.svg'
    },
    {
      id: '3',
      name: 'Camiseta Deportiva',
      description: 'Material transpirable de alta calidad',
      price: 29.99,
      category: 'clothing',
      stock: 20,
      image: '/placeholder.svg'
    },
    {
      id: '4',
      name: 'Zapatillas Running',
      description: 'Máxima comodidad para tus entrenamientos',
      price: 89.99,
      category: 'sports',
      stock: 15,
      image: '/placeholder.svg'
    }
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });
  };
  
  export const getProductById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(prod => prod.id === id));
      }, 500);
    });
  };
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter(prod => prod.category === categoryId));
      }, 500);
    });
  };
  
  