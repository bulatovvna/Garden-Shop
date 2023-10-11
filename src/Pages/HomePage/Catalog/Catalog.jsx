import { useDispatch, useSelector } from "react-redux"
import s from './Catalog.module.css'
import { Link } from 'react-router-dom'
import { useEffect } from "react"
import { fetchCategoriesList } from "../../../asyncActions/categories"

function Catalog() {

  const categories = useSelector(store => store.categories)
  const dispatch = useDispatch()
  console.log(categories.categories);

  useEffect(() => {
    dispatch(fetchCategoriesList())
  }, [])

  return (
    <div>
      <div className={s.headline}>
        <p>Catalog</p>
        <Link to={`/categories/all`}>
          <button>All categories</button>
        </Link>
      </div>
      <div className={s.categoryList}>
        {categories.categories.map(category => {
            return  (
            <Link key={category.title} to={`/categories/${category.id}`} className={s.categoryItem}>
              <div>
                <img src={`http://localhost:3333${category.image}`} alt={category.title} />
                <p>{category.title}</p>
              </div>
            </Link>
            ) 
        }).slice(0, -1)}
      </div>
    </div>
  )
}

export default Catalog
