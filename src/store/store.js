import {applyMiddleware, combineReducers, createStore} from 'redux'
import { CategoriesReducer } from "./CategoriesReducer";
import thunk from 'redux-thunk'
import { ProductsReducer } from './ProductsReducer';
import { CategoryReducer } from './CategoryReducer';
import { OneProductReducer } from './OneProductReducer';
import BasketReducer from './BasketReducer';

const rootReducer = combineReducers({
    categories: CategoriesReducer,
    products: ProductsReducer,
    category: CategoryReducer,
    product: OneProductReducer,
    basket: BasketReducer 
})

export const store = createStore(rootReducer, applyMiddleware(thunk))