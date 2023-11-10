import { setCategoriesProducts } from "../store/CategoryReducer";

export const fetchProductsListOfCategories = (id) => {
    return function (dispatch) {
      fetch(`http://localhost:3333/categories/${id}`)
        .then((res) => res.json())
        .then((data) => {
          dispatch(setCategoriesProducts(data))
        });
    };
  };
