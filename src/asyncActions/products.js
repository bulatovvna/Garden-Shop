import { setProduct } from "../store/OneProductReducer";
import {setProducts } from "../store/ProductsReducer";

export const fetchProductsList = () => {
    return function (dispatch) {
      fetch('http://localhost:3333/products/all')
        .then((res) => res.json())
        .then((data) => {
          let newData = data.map(elem => {
            return {...elem, show: true, show2: true}
          })
          dispatch(setProducts(newData))
        });
    };
  };

  export const fetchProductItem = (id) => {
    return function (dispatch) {
      fetch(`http://localhost:3333/products/${id}`)
        .then((res) => res.json())
        .then((data) => dispatch(setProduct(data)));
    };
  };
