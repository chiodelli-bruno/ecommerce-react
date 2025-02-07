import Item from "./Item"
import "./ItemList.css"

const ItemList = ({ products }) => {
  if (products.length === 0) {
    return <p className="no-products">No se encontraron productos.</p>
  }

  return (
    <div className="item-list">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ItemList

