import { ref, get, query, orderByChild, equalTo } from "firebase/database"
import { db } from "../firebase/config"

export const getProducts = async () => {
  try {
    const productsRef = ref(db, "products")
    const snapshot = await get(productsRef)
    if (snapshot.exists()) {
      return Object.entries(snapshot.val()).map(([id, data]) => ({
        id,
        ...data,
      }))
    }
    return []
  } catch (error) {
    console.error("Error getting products:", error)
    throw error
  }
}

export const getProductsByCategory = async (categoryId) => {
  try {
    const productsRef = ref(db, "products")
    const categoryQuery = query(productsRef, orderByChild("category"), equalTo(categoryId))
    const snapshot = await get(categoryQuery)
    if (snapshot.exists()) {
      return Object.entries(snapshot.val()).map(([id, data]) => ({
        id,
        ...data,
      }))
    }
    return []
  } catch (error) {
    console.error("Error getting products by category:", error)
    throw error
  }
}

export const getProductById = async (productId) => {
  try {
    const productRef = ref(db, `products/${productId}`)
    const snapshot = await get(productRef)
    if (snapshot.exists()) {
      return {
        id: productId,
        ...snapshot.val(),
      }
    }
    return null
  } catch (error) {
    console.error("Error getting product:", error)
    throw error
  }
}

