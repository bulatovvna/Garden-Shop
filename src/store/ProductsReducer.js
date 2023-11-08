const defaultState = {
    products: []
}

const SET_PRODUCTS = "SET_PRODUCTS"
const FILTER_PRODUCTS_PRICE = 'FILTER_PRODUCTS_PRICE'
const FILTER_PRODUCTS = 'FILTER_PRODUCTS'

export const ProductsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case SET_PRODUCTS:
            return {...state, products: action.payload.map(elem => ({...elem, show: true, show2: true}))}
        case FILTER_PRODUCTS_PRICE:
            state.products = state.products.map(elem => ({...elem, show: true}))
            return {...state, products: state.products.map(elem => {
                if(!(elem.discont_price >= action.payload.min_price && elem.discont_price <= action.payload.max_price)){
                    elem.show = false
                }
                return elem
            })}
        case FILTER_PRODUCTS:
            if(action.payload === true) {
                return {...state, products: state.products.map(elem => {
                    if(elem.price - elem.discont_price === 0) {
                        elem.show = !elem.show
                    }
                    return elem
                })}
            } else {
                return {...state, products: state.products.map(elem => ({...elem, show: true}))}
            }
        default: return state
    }
}

export const setProducts = (payload) => ({type: SET_PRODUCTS, payload})
export const filterProductsPrice = (payload) => ({type: FILTER_PRODUCTS_PRICE, payload})
export const filterProducts = (payload) => ({type: FILTER_PRODUCTS, payload})