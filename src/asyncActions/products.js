import { setProduct } from "../store/OneProductReducer";
import {setProducts } from "../store/ProductsReducer";

export const fetchProductsList = () => {
    return function (dispatch) {
      fetch('http://localhost:3333/products/all')
        .then((res) => res.json())
        .then((data) => dispatch(setProducts(data)));
    };
  };

  export const fetchProductItem = (id) => {
    return function (dispatch) {
      fetch(`http://localhost:3333/products/${id}`)
        .then((res) => res.json())
        .then((data) => dispatch(setProduct(data)));
    };
  };