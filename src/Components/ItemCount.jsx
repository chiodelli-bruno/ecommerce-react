import { useState } from "react"
import "./ItemCount.css"

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial)

  const increment = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  return (
    <div className="item-count">
      <div className="count-controls">
        <button onClick={decrement} disabled={count === 1}>
          -
        </button>
        <span>{count}</span>
        <button onClick={increment} disabled={count === stock}>
          +
        </button>
      </div>
      <button className="add-to-cart" onClick={() => onAdd(count)} disabled={!stock}>
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount

