import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({ product }) => {
  return (
    <div className="item">
      <img src={product.image || "/placeholder.svg"} alt={product.name} className="item-image" />
      <h3 className="item-name">{product.name}</h3>
      <p className="item-price">${product.price.toFixed(2)}</p>
      <p className="item-category">Categoría: {product.category}</p>
      <Link to={`/item/${product.id}`} className="view-detail">
        Ver detalle
      </Link>
    </div>
  )
}

export default Item

