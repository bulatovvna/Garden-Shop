import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import s from '../ProductsPage/ProductsPage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsList } from '../../asyncActions/products'
import Sort from '../../components/Sort/Sort'
import { addToCart } from '../../store/BasketReducer'

function ProductsOnSalePage() {

    const productsOnSale = useSelector(store => store.products)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchProductsList())
    }, [])

    const filteredProducts = productsOnSale.products.filter(product => product.discont_price !== null)

    const showCheckbox = false

  return (
    <div>
      <h2>Products with sale</h2>
      <Sort showCheckbox={showCheckbox}/>
      <div className={s.productsList}>
        { 
            filteredProducts.map(product => {
                return (
                    <div className={s.productItem} key={product.id}>
                    <Link to={`/product/${product.id}`}>
                      <img src={`http://localhost:3333${product.image}`} 
                            alt={product.title}
                            style={{width: '100%', height: '350px', objectFit: 'cover'}}
                           />
                    </Link>

                    <button 
                      className={s.btn_cart}
                      onClick={() => dispatch(addToCart(product))}
                    >Add to cart</button>
        
                      <div className={s.prices}>
                        {product.discont_price ? 
                          <p className={s.discont_price}>{product.discont_price}$</p>
                          :
                          <p className={s.discont_price}>{product.price}$</p>
                        }
                        {
                          product.discont_price && <p className={s.price}>{product.price}$</p>
                        }
                        {
                          product.discont_price && 
                          <p className={s.sale}>
                            -{Math.round(((product.price - product.discont_price) * 100) / product.price)}%</p>
                        }
                      </div>
        
                      <p>{product.title}</p>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default ProductsOnSalePage
