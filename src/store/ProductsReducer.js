const defaultState = {
    products: []
}

const SET_PRODUCTS = "SET_PRODUCTS"
const FILTER_PRODUCTS_PRICE = 'FILTER_PRODUCTS_PRICE'
const FILTER_PRODUCTS_SALE = 'FILTER_PRODUCTS_SALE'
const SORT_PRODUCTS = 'SORT_PRODUCTS'

export const ProductsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case SET_PRODUCTS:
            return {...state, products: action.payload.map(elem => ({...elem, show: true, show2: true}))}
        case FILTER_PRODUCTS_PRICE:
            state.products = state.products.map(elem => ({...elem, show2: true}))
                return{...state, products: state.products.map(elem => {
                    const realPrice = (elem.discont_price) ?  elem.discont_price : elem.price
                    if(realPrice < action.payload.min_price || realPrice > action.payload.max_price){
                        elem.show2 = false
                    }
                    return elem
                })}
        case FILTER_PRODUCTS_SALE:
            if(action.payload === true){
                return {...state, products: state.products.map(elem => {
                    if( elem.discont_price === null){
                        elem.show = false
                    }
                    return elem
                })}
            } else {
                return {...state, products: state.products.map(elem => {
                    elem.show = true
                    return elem
                })}
            }
        case SORT_PRODUCTS:
            if(action.payload === 1) {
                return {...state, products: state.products.slice().sort((a,b) => a.price - b.price)}
            }
            if(action.payload === 2) {
                return {...state, products: state.products.slice().sort((a,b) => b.price - a.price)}
            }
            if(action.payload === 3) {
                return {...state, products: state.products.slice().sort((a,b) => {
                    if(a.title > b.title) return 1
                    if(a.title < b.title) return -1
                    if(a.title === b.title) return 0
                })}
            }
            return state
        default: return state
    }
}

export const setProducts = (payload) => ({type: SET_PRODUCTS, payload})
export const filterProductsPrice = (payload) => ({type: FILTER_PRODUCTS_PRICE, payload})
export const filterProductsSale = (payload) => ({type: FILTER_PRODUCTS_SALE, payload})
export const sortProducts = (payload) => ({type: SORT_PRODUCTS, payload})