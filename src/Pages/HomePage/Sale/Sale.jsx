import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import s from './Sale.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsList } from '../../../asyncActions/products'
import { addToCart } from '../../../store/BasketReducer'

function Sale() {

    const productsOnSale = useSelector(store => store.products)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchProductsList())
    }, [])

    const filteredProducts = productsOnSale.products.filter(product => product.discont_price !== null)

  return (
    <div className={s.saleProducts} id='saleProductsList'>
      <p>Sale</p>
      <div className={s.saleProductsList}>
        { 
            filteredProducts.map(product => {
                return (
                        <div key={product.title} className={s.saleProductItem}>
                            <Link to={`/product/${product.id}`} >
                                <img src={`http://localhost:3333${product.image}`} alt='product on sale'/>
                            </Link>

                            <button 
                              className={s.btn_cart}
                              onClick={() => dispatch(addToCart(product))}
                            >Add to cart</button>
                            
                            <div className={s.prices}>
                                <p className={s.discont_price}>{product.discont_price}$</p>
                                <p className={s.price}>{product.price}$</p>
                                <p className={s.sale}>-{Math.round(((product.price - product.discont_price) * 100) / product.price)}%</p>
                            </div>
                            <p className={s.saleProductTitle}>{product.title}</p>
                        </div>
                )
            }).slice(4,7)
        }
      </div>
    </div>
  )
}

export default Sale
