const defaultState = {
    category: []
}

const SET_CATEGORIES_PRODUCTS = "SET_CATEGORIES_PRODUCTS"

export const CategoryReducer = (state = defaultState, action) => {
    switch(action.type) {
        case SET_CATEGORIES_PRODUCTS:
            return {...state, category: action.payload}
        default: return state
    }
}

export const setCategoriesProducts = (payload) => ({type: SET_CATEGORIES_PRODUCTS, payload})