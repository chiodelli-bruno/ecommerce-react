import { collection, getDocs, doc, getDoc, query, where } from "firebase/firestore"
import { db } from "../firebase/config"

// Get all products
export const getProducts = async () => {
  try {
    const productsRef = collection(db, "products")
    const snapshot = await getDocs(productsRef)
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  } catch (error) {
    console.error("Error getting products:", error)
    throw error
  }
}

// Get products by category
export const getProductsByCategory = async (categoryId) => {
  try {
    const productsRef = collection(db, "products")
    const q = query(productsRef, where("category", "==", categoryId))
    const snapshot = await getDocs(q)
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  } catch (error) {
    console.error("Error getting products by category:", error)
    throw error
  }
}

// Get a single product by ID
export const getProductById = async (productId) => {
  try {
    const productRef = doc(db, "products", productId)
    const snapshot = await getDoc(productRef)
    if (snapshot.exists()) {
      return {
        id: snapshot.id,
        ...snapshot.data(),
      }
    }
    return null
  } catch (error) {
    console.error("Error getting product:", error)
    throw error
  }
}

