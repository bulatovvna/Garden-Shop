import s from "./Header.module.css"
import {ReactComponent as Logo} from "./logo.svg"
import {ReactComponent as Cart} from './cart.svg'
import { Link, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"

function Header() {

  const cart = useSelector(store => store.basket.basketItems)

  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path ? `${s.active}` : ''
  }

  return (
    <div className={s.header}>
      <div className={s.header_left}>
        <Logo/>
        <Link to={`/categories/all`}>
          <button className={s.header_catalog_button}>Catalog</button>
        </Link>
      </div>

      <div className={s.header_right}>
        <div className={s.header_menu}>
          <Link to={'/'} className={`${s.header_menu_item} ${isActive('/')}`}><p>Main Page</p></Link>
          <Link to={'/products/all'} className={`${s.header_menu_item} ${isActive('/products/all')}`}><p>All products</p></Link>
          <Link to={'/products/sale'} className={`${s.header_menu_item} ${isActive('/products/sale')}`}><p>All sales</p></Link>
        </div>

          <Link to={'/basket'}>
            <button className={s.header_cart_button}>
              <Cart/>
              <span>
                {cart.reduce((sum, value) => sum + value.count, 0)}
              </span>  
            </button>
          </Link>
      </div>
    </div>
  )
}

export default Header
