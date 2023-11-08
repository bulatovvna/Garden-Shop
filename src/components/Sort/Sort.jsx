import React, { useRef } from 'react'
import s from "./Sort.module.css"
import { useDispatch } from 'react-redux'
import { filterProducts, filterProductsPrice } from '../../store/ProductsReducer'

function Sort() {

  const formRef = useRef()
  const dispatch = useDispatch()

  function setMinMaxPrice(e) {
    let formData = new FormData(formRef.current)
    formData = Object.fromEntries(formData) 
    formData.max_price = (!formData.max_price) ? Infinity : +formData.max_price
    formData.min_price = (!formData.min_price) ? -Infinity : +formData.min_price

    dispatch(filterProductsPrice(formData))
  }

  return (
    <div className={s.sort_wrapper}>
      <form ref={formRef} className={s.sort_price} onChange={(e) => setMinMaxPrice(e)}>
        <label>Price</label>
        <input
            type='number'
            placeholder='from'
            name='min_price'
        />
        <input
            type='number'
            placeholder='to'
            name='max_price'
        />
      </form>

      <fieldset className={s.sort_discPrice}>
        <label>Discount price</label>
        <input
            type='checkbox'
        />
      </fieldset>

        <fieldset className={s.sort_options}>
            <label>Sorted</label>
            <select>
                <option value="defaultOption">by default</option>
                <option value={1}>Descending</option>
                <option value={2}>Ascending</option>
                <option value={3}>Alphabetically</option>
            </select>
        </fieldset>

    </div>
  )
}

export default Sort
