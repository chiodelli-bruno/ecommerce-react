// Simulated product data
const products = [
  { id: '1', name: 'Smartphone', price: 500, category: 'electronics', description: 'A high-end smartphone with the latest features.' },
  { id: '2', name: 'Laptop', price: 1000, category: 'electronics', description: 'A powerful laptop for work and gaming.' },
  { id: '3', name: 'T-shirt', price: 20, category: 'clothing', description: 'A comfortable cotton t-shirt.' },
  { id: '4', name: 'Book', price: 15, category: 'books', description: 'A bestselling novel.' },
];

// Function to get all products
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

// Function to get products by category
export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = products.filter(product => product.category === categoryId);
      resolve(filteredProducts);
    }, 1000);
  });
};

// Function to get a single product by ID
export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find(product => product.id === productId);
      resolve(product);
    }, 1000);
  });
};

