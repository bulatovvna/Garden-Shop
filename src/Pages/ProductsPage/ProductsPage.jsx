import React, { useEffect } from 'react'
import s from "./ProductsPage.module.css"
import Sort from '../../components/Sort/Sort'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import {fetchProductsListOfCategories } from '../../asyncActions/category'

function ProductsPage() {

  const dispatch = useDispatch()
  const { id } = useParams()
  const products = useSelector(store => store.category.category)

  useEffect(() => {
    if (id) {
      dispatch(fetchProductsListOfCategories(id))
    }
  },[id])

  return (
    <div>
      <h2>{products?.category?.title}</h2>
      <Sort/>
      <div className={s.productsList}>
        {products?.data && products?.data.map(product => 
            <div className={s.productItem} key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={`http://localhost:3333${product.image}`} 
                    alt={product.title}
                    style={{width: '100%', height: '350px', objectFit: 'cover', position: 'relative'}}
                   />
            </Link>

            <button className={s.btn_cart}>Add to cart</button>

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
        )}
      </div>
    </div>
  )
}

export default ProductsPage
