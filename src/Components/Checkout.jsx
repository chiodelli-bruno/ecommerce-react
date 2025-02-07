import { useState } from "react"
import { useCart } from "../context/CartContex"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase/config"
import "./Checkout.css"

const Checkout = () => {
  const { cart, getTotalPrice, clearCart } = useCart()
  const [orderComplete, setOrderComplete] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const order = {
        buyer: formData,
        items: cart.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        total: getTotalPrice(),
        date: new Date(),
      }

      const docRef = await addDoc(collection(db, "orders"), order)
      setOrderId(docRef.id)
      setOrderComplete(true)
      clearCart()
    } catch (error) {
      console.error("Error al crear la orden:", error)
      setError("Hubo un error al procesar tu orden. Por favor, intenta de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Procesando tu orden...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="error-container">
        <p>{error}</p>
        <button onClick={() => setError(null)} className="button-primary">
          Intentar de nuevo
        </button>
      </div>
    )
  }

  if (orderComplete) {
    return (
      <div className="checkout-complete">
        <h2>¡Gracias por tu compra!</h2>
        <p>
          Tu número de orden es: <strong>{orderId}</strong>
        </p>
        <p>Te enviaremos un correo electrónico con los detalles de tu pedido.</p>
      </div>
    )
  }

  return (
    <div className="checkout-container">
      <h2>Finalizar Compra</h2>
      {cart.length === 0 ? (
        <p>No hay items en el carrito</p>
      ) : (
        <>
          <div className="cart-summary">
            <h3>Resumen de compra</h3>
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <span>{item.name}</span>
                <span>Cantidad: {item.quantity}</span>
                <span>${item.price * item.quantity}</span>
              </div>
            ))}
            <div className="cart-total">
              <strong>Total: ${getTotalPrice().toFixed(2)}</strong>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="checkout-form">
            <div className="form-group">
              <label htmlFor="name">Nombre completo</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Teléfono</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Dirección</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="checkout-button">
              Confirmar Compra
            </button>
          </form>
        </>
      )}
    </div>
  )
}

export default Checkout

