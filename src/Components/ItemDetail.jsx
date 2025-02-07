import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCart } from "../context/CartContex"
import ItemCount from "./ItemCount"
import "./ItemDetail.css"

const ItemDetail = ({ product }) => {
  const [quantityAdded, setQuantityAdded] = useState(0)
  const { addItem } = useCart()
  const navigate = useNavigate()

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)
    addItem(product, quantity)
  }

  return (
    <div className="item-detail">
      <div className="item-detail-image">
        <img src={product.image || "/placeholder.svg"} alt={product.name} />
      </div>
      <div className="item-detail-content">
        <h2>{product.name}</h2>
        <p className="price">${product.price.toFixed(2)}</p>
        <p className="description">{product.description}</p>
        <p className="stock">Stock disponible: {product.stock}</p>
        <div className="item-detail-actions">
          {product.stock === 0 ? (
            <p className="out-of-stock">Producto sin stock</p>
          ) : quantityAdded > 0 ? (
            <div className="added-actions">
              <button className="button-primary" onClick={() => navigate("/cart")}>
                Terminar compra
              </button>
              <button className="button-secondary" onClick={() => navigate("/")}>
                Seguir comprando
              </button>
            </div>
          ) : (
            <ItemCount stock={product.stock} initial={1} onAdd={handleOnAdd} />
          )}
        </div>
      </div>
    </div>
  )
}

export default ItemDetail

