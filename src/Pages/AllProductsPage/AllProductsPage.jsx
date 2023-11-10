import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sort from "../../components/Sort/Sort";
import s from "../ProductsPage/ProductsPage.module.css"
import { fetchProductsList } from "../../asyncActions/products";
import { Link } from "react-router-dom";
import { addToCart } from "../../store/BasketReducer";

function AllProductsPage() {

    const dispatch = useDispatch()
    const products = useSelector(store => store.products.products).filter(elem => elem.show && elem.show2)
    console.log(products);

    useEffect(() => {
        dispatch(fetchProductsList())
    },[])
  
    return (
      <div>
        <h2>All products</h2>
        <Sort/>
        <div className={s.productsList}>
          {products.map(product => 
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
              > Add to cart</button>
 
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
  
  export default AllProductsPage
  