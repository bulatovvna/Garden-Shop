const defaultState = {
    product: []
}

const SET_PRODUCT = 'SET_PRODUCT'

export const OneProductReducer = (state = defaultState, action) => {
    switch(action.type) {
        case SET_PRODUCT:
            return {...state, product: action.payload}
        default: return state
    }
}

export const setProduct = (payload) => ({type: SET_PRODUCT, payload})