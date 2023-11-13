import React, { useRef } from 'react'
import s from "./Sort.module.css"
import { useDispatch } from 'react-redux'
import { filterProductsPrice, filterProductsSale, sortProducts } from '../../store/ProductsReducer'

function Sort({showCheckbox}) {

  const dispatch = useDispatch()
  const formRef = useRef()

  function setMinMaxPrice(e){
    let data = new FormData(formRef.current)
    data = Object.fromEntries(data)
    data.max_price = (!data.max_price) ? Infinity : data.max_price
    data.min_price = (!data.min_price) ? -Infinity : data.min_price
    dispatch(filterProductsPrice(data))
  }

  return (
    <div className={s.sort_wrapper}>
      <form ref={formRef} onChange={(e) => setMinMaxPrice(e)} className={s.sort_price}>
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

      {showCheckbox && (
        <fieldset className={s.sort_discPrice}>
          <label>Discount price</label>
          <input
              onChange={(e) => dispatch(filterProductsSale(e.target.checked))}
              type='checkbox'
              show='true'
          />
        </fieldset>
      )}

        <fieldset className={s.sort_options}>
            <label>Sorted</label>
            <select onChange={(e) => dispatch(sortProducts(e.target.value))}>
                <option value={0}>by default</option>
                <option value='1'>By descending</option>
                <option value={2}>By ascending</option>
                <option value={3}>Alphabetically</option>
            </select>
        </fieldset>

    </div>
  )
}

export default Sort
