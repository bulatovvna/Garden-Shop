import React, { useEffect} from 'react'
import s from "./CategoryPage.module.css"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategoriesList} from '../../asyncActions/categories'

function CategoryPage() {

  const categories = useSelector(store => store.categories)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(fetchCategoriesList())
  }, [])


  return (
    <div>
      <h2>Categories</h2>
      <div className={s.categoryList}>
        {categories.categories.map(category => {
          // console.log(category);
            return  (
            <Link key={category.title} to={`/categories/${category.id}`} className={s.categoryItem}>
              <div>
                <img src={`http://localhost:3333${category.image}`} alt={category.title} />
                <p>{category.title}</p>
              </div>
            </Link>
            ) 
        })}
      </div>
    </div>
  )
}

export default CategoryPage
