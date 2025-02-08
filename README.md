# E-commerce React SPA

## Descripción
Desarrollo del Front End de una Single Page Application (SPA) de e-commerce utilizando **React**. Se implementan distintos patrones y conceptos específicos de React, como el **Virtual DOM** y los **hooks**. Además, se incorporan manejo de eventos, navegación entre componentes y administración de datos globales, como el estado del carrito de compras.

## Tecnologías Utilizadas
- React.js
- React Router DOM
- Firebase (Base de Datos en la nube)
- CSS  

## Características principales

### 🔹 Generación Dinámica del Listado de Productos
- Los productos se obtienen desde una base de datos en **Firebase**.
- Se renderiza dinámicamente el listado de productos en la interfaz.

### 🔹 Vistas Detalladas de Productos
- Cada producto tiene una vista en detalle accesible a través del `ItemDetailContainer`.
- Se muestra información específica del producto y permite agregarlo al carrito.

### 🔹 Componentización y Responsabilidad Separada
- Implementación de componentes contenedores y de presentación:
  - `ItemListContainer`: Obtiene y maneja el listado de productos.
  - `ItemList`: Presenta la lista de productos.

### 🔹 Componente `ItemCount`
- Permite seleccionar la cantidad de unidades a agregar al carrito.
- Incluye validaciones como:
  - **Valor mínimo** de compra.
  - **Límite según stock disponible**.
- Se oculta luego de agregar un producto al carrito en la vista `ItemDetail`.

### 🔹 Carrito de Compras
- Administración del carrito mediante **context API**.
- Visualización en tiempo real de la cantidad de productos agregados.
- Opciones para modificar o eliminar productos del carrito.

### 🔹 Finalización de Compra
- Se almacena la orden en **Firebase**.
- Se genera un ID de compra para el usuario.
- Se muestra un mensaje de confirmación al finalizar la compra.

## Instalación y Ejecución 🚀
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/chiodelli-bruno/tu-repositorio.git
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Ejecutar la aplicación en modo desarrollo:
   ```bash
   npm start
   ```
4. Abrir en el navegador: `http://localhost:5173/`

## Autor ✨
- **Bruno Chiodelli** - [GitHub](https://github.com/chiodelli-bruno)

## Licencia 📜
Este proyecto está bajo la licencia MIT.

