import React, { useEffect } from 'react'
import s from "./Sort.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategoriesList } from '../../asyncActions/categories'

function Sort() {

    const categories = useSelector(store => store.categories)
    const dispatch = useDispatch()
    console.log(categories, 'sort');

    useEffect(() => {
        dispatch(fetchCategoriesList())
    },[])

  return (
    <div className={s.sort_wrapper}>
      <fieldset className={s.sort_price}>
        <label>Price</label>
        <input
            type='number'
            placeholder='from'
        />
        <input
            type='number'
            placeholder='to'
        />
      </fieldset>

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
                {categories.categories.map(category => 
                    <option key={category.title} value={category.title}>{category.title}</option>
                )}
            </select>
        </fieldset>

    </div>
  )
}

export default Sort
