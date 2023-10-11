const defaultState = {
    products: []
}

const SET_PRODUCTS = "SET_PRODUCTS"

export const ProductsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case SET_PRODUCTS:
            return {...state, products: action.payload}
        default: return state
    }
}

export const setProducts = (payload) => ({type: SET_PRODUCTS, payload})