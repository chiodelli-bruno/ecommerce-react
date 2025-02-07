import { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import { ref, get } from "firebase/database"
import { db } from "../firebase/config"
import { useCart } from "../context/CartContex"
import CartWidget from "./CartWidget"
import "./NavBar.css"

const NavBar = () => {
  const [categories, setCategories] = useState([])
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { getTotalQuantity } = useCart()

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesRef = ref(db, "categories")
        const snapshot = await get(categoriesRef)
        if (snapshot.exists()) {
          setCategories(snapshot.val())
        }
      } catch (error) {
        console.error("Error fetching categories:", error)
      }
    }

    fetchCategories()
  }, [])

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Mi E-commerce
        </Link>

        <div className={`navbar-menu ${isMenuOpen ? "is-open" : ""}`}>
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} end>
            Todos los productos
          </NavLink>

          {categories.map((category) => (
            <NavLink
              key={category}
              to={`/category/${category}`}
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </NavLink>
          ))}
        </div>

        <div className="navbar-end">
          <Link to="/cart" className="cart-link">
            <CartWidget quantity={getTotalQuantity()} />
          </Link>
          <button className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

