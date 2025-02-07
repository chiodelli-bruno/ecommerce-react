import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ref, get, query, orderByChild, equalTo } from "firebase/database"
import { db } from "../firebase/config"
import ItemList from "./ItemList"
import "./ItemListContainer.css"

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { categoryId } = useParams()

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      setError(null)
      try {
        const productsRef = ref(db, "products")
        let snapshot

        if (categoryId) {
          const categoryQuery = query(productsRef, orderByChild("category"), equalTo(categoryId))
          snapshot = await get(categoryQuery)
        } else {
          snapshot = await get(productsRef)
        }

        if (snapshot.exists()) {
          const productsData = Object.entries(snapshot.val()).map(([id, data]) => ({
            id,
            ...data,
          }))
          setProducts(productsData)
        } else {
          setProducts([])
        }
      } catch (error) {
        console.error("Error fetching products:", error)
        setError("Error al cargar los productos. Por favor, intente de nuevo más tarde.")
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [categoryId])

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Cargando productos...</p>
      </div>
    )
  }

  if (error) {
    return <div className="error-container">{error}</div>
  }

  return (
    <div className="item-list-container">
      <h2 className="category-title">
        {categoryId ? `${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}` : "Todos los productos"}
      </h2>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer

