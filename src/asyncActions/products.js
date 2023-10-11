import { setProducts } from "../store/ProductsReducer";

export const fetchProductsList = () => {
    return function (dispatch) {
      fetch('http://localhost:3333/products/all')
        .then((res) => res.json())
        .then((data) => dispatch(setProducts(data)));
    };
  };