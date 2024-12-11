import React, { useState } from 'react';
import NavBar from './Componentes/NavBar';
import ItemListContainer from './Componentes/ItemListContainer';
import viteLogo from '/vite.svg';
import reactLogo from './assets/react.svg';


function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="main-content">
        <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />
      </main>
      <footer className="footer">
        <p>2024&copy;Bruno Chiodelli.</p>
      </footer>
    </div>
  );
}

export default App;

