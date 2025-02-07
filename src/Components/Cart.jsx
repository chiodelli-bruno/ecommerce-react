import { useCart } from "../context/CartContex"
import { Link } from "react-router-dom"
import "./Cart.css"

const Cart = () => {
  const { cart, removeItem, clearCart, getTotalPrice } = useCart()

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Tu carrito está vacío</h2>
        <p>¿No sabes qué comprar? ¡Miles de productos te esperan!</p>
        <Link to="/" className="button-primary">
          Volver a la tienda
        </Link>
      </div>
    )
  }

  return (
    <div className="cart">
      <h2>Tu Carrito</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image || "/placeholder.svg"} alt={item.name} />
          <div className="item-details">
            <h3>{item.name}</h3>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio: ${(item.price * item.quantity).toFixed(2)}</p>
          </div>
          <button onClick={() => removeItem(item.id)} className="remove-item">
            Eliminar
          </button>
        </div>
      ))}
      <div className="cart-summary">
        <p>Total: ${getTotalPrice().toFixed(2)}</p>
        <button onClick={clearCart} className="clear-cart">
          Vaciar carrito
        </button>
        <Link to="/checkout" className="button-primary">
          Finalizar compra
        </Link>
      </div>
    </div>
  )
}

export default Cart

