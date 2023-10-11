import { setCategories} from "../store/CategoriesReducer";

export const fetchCategoriesList = () => {
    return function (dispatch) {
      fetch('http://localhost:3333/categories/all')
        .then((res) => res.json())
        .then((data) => {
          dispatch(setCategories(data))
        });
    };
  };