import s from "./Header.module.css"
import {ReactComponent as Logo} from "./logo.svg"
import {ReactComponent as Cart} from './cart.svg'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

function Header() {

  const cart = useSelector(store => store.basket.basketItems)

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
          <Link to={'/'} className={s.header_menu_item}><p>Main Page</p></Link>
          <Link to={'/products/all'} className={s.header_menu_item}><p>All products</p></Link>
          <Link to={'/products/sale'} className={s.header_menu_item}><p>All sales</p></Link>
        </div>

          <Link to={'/basket'}>
            <button className={s.header_cart_button}><Cart/></button>
            <span>
              {cart.reduce((sum, value) => sum + value.count, 0)}
            </span>
          </Link>
      </div>
    </div>
  )
}

export default Header
