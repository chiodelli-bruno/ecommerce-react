import { initializeApp } from "firebase/app"
import { getFirestore, collection, addDoc } from "firebase/firestore"
import firebaseConfig from "../firebase/config"
import categories from "../data/categories.json"
import products from "../data/products.json"

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

async function importData() {
  try {
    // Importar categorías
    for (const category of categories.categories) {
      await addDoc(collection(db, "categories"), category)
      console.log(`Categoría añadida: ${category.name}`)
    }

    // Importar productos
    for (const product of products.products) {
      await addDoc(collection(db, "products"), product)
      console.log(`Producto añadido: ${product.name}`)
    }

    console.log("Importación completada con éxito")
  } catch (error) {
    console.error("Error durante la importación:", error)
  }
}

importData()

