import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ref, get } from "firebase/database"
import { db } from "../firebase/config"
import ItemDetail from "./ItemDetail"
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { itemId } = useParams()

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true)
      setError(null)
      try {
        const productRef = ref(db, `products/${itemId}`)
        const snapshot = await get(productRef)
        if (snapshot.exists()) {
          setProduct({ id: itemId, ...snapshot.val() })
        } else {
          setError("Producto no encontrado")
        }
      } catch (error) {
        console.error("Error fetching product:", error)
        setError("Error al cargar el producto. Por favor, intente de nuevo más tarde.")
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [itemId])

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Cargando producto...</p>
      </div>
    )
  }

  if (error) {
    return <div className="error-container">{error}</div>
  }

  return (
    <div className="item-detail-container">
      {product ? <ItemDetail product={product} /> : <p>Producto no encontrado</p>}
    </div>
  )
}

export default ItemDetailContainer

