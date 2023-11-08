import React, { useEffect, useState } from 'react'
import s from "./BasketPage.module.css"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrCount, incrCount, remElem, resetBasket, setTotalPrice } from '../../store/BasketReducer'


function BasketPage() {

    const navigate = useNavigate()
    const basket = useSelector(store => store.basket.basketItems)
    const dispatch = useDispatch()

    useEffect(() => {
        localStorage.setItem('goods', JSON.stringify(basket))
    }, [basket])

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const sendData = (e) => {
        e.preventDefault()
        if (inputValue.trim() !== '') {
            fetch(`http://localhost:3333/order/send`, {
                method: "Post",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ inputValue })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setInputValue('')
                    dispatch(resetBasket())
                    dispatch(setTotalPrice(0))
                })
        } else {
            alert('You have to enter your number')
        }
    }

    let totalPrice = basket.reduce((total, item) => {
        return (item.discont_price) ? total + item.discont_price * item.count : total + item.price * item.count
    }, 0)

    return (
        <div>
            <h2>Shopping cart</h2>
            <button className={s.button_toBack} onClick={() => navigate(-1)}>Back to the store</button>

            {(basket.length === 0) && <p className={s.empty}>Basket is empty</p>}
            <div className={s.basket_container}>
                <div className={s.basket_wrapper}>
                    {
                        basket.map(elem => (
                            <div key={elem.title} className={s.basketItem}>
                                <img src={`http://localhost:3333/${elem.image}`} alt='product' />
                                <div className={s.itemInfo}>
                                    <p className={s.title}>{elem.title}</p>
                                    <div className={s.count_wrapper}>
                                        <button onClick={() => dispatch(decrCount(elem.id))}>-</button>
                                        <p>{elem.count}</p>
                                        <button onClick={() => dispatch(incrCount(elem.id))}>+</button>
                                    </div>
                                </div>
                                <div className={s.priceInfo}>
                                    {elem.discont_price ?
                                        <p className={s.discont_price}>{elem.discont_price}$</p>
                                        :
                                        <p className={s.discont_price}>{elem.price}$</p>
                                    }
                                    {
                                        elem.discont_price && <p className={s.price}>{elem.price}$</p>
                                    }
                                </div>
                                <button
                                    className={s.remove_btn}
                                    onClick={() => dispatch(remElem(elem.id))}
                                >x</button>
                            </div>
                        ))
                    }
                </div>

                {basket.length !== 0 && (
                    <div className={s.order_wrapper}>
                        <p className={s.order_title}>Order details</p>
                        <div className={s.totalPrice}>
                            <p className={s.total}>Total</p>
                            <p className={s.order_price}>{totalPrice}</p>
                        </div>
                        <form>
                            <input type='number' placeholder='Phone number' onChange={handleInputChange} />
                            <button className={s.order_btn} onClick={sendData}>Order</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    )
}

export default BasketPage
