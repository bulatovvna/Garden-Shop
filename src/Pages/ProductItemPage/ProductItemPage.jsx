import React, { useEffect } from 'react'
import s from "./ProductItemPage.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductItem} from '../../asyncActions/products';
import { useParams } from 'react-router-dom';

function ProductItemPage() {

    const dispatch = useDispatch()
    const { id } = useParams()
    const product = useSelector(store => store.product.product)
    console.log(product);

    useEffect(() => {
        if(id) {
            dispatch(fetchProductItem(id))
        }
    },[id])

  return (
    <div>
      <h2>{product.map(elem => elem.title)}</h2>
        { 
            product.map(elem => 
                <div className={s.productItem} key={elem.id}>
                    <img src={`http://localhost:3333${elem.image}`} alt={elem.title}/>
                    <div className={s.productItemInfo}>
                        <div className={s.dashed}>
                            <div className={s.prices}>
                                {elem.discont_price ? 
                                <p className={s.discont_price}>{elem.discont_price}$</p>
                                :
                                <p className={s.discont_price}>{elem.price}$</p>
                                }
                                {
                                elem.discont_price && <p className={s.price}>{elem.price}$</p>
                                }
                                {
                                elem.discont_price && 
                                <p className={s.sale}>
                                    -{Math.round(((elem.price - elem.discont_price) * 100) / elem.price)}%</p>
                                }
                            </div>

                            <button className={s.btn_cart}>To cart</button>
                        </div>
                        <div className={s.desc}>
                            <p>Description</p>
                            <span>{elem.description}</span>
                    </div>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default ProductItemPage
