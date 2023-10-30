const defaultState = {
    basketItems: JSON.parse(localStorage.getItem('goods')) ?? []
}

const ADD_TO_CART = 'ADD_TO_CART'
const INCR_COUNT = 'INCR_COUNT'
const DECR_COUNT = 'DECR_COUNT'
const REM_ELEM = 'REM_ELEM'
const RESET_BASKET = 'RESET_BASKET'
const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE'

const BasketReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TO_CART: 
            const newItem = state.basketItems.find(elem => elem.id === action.payload.id)

            if(newItem) {
                return {
                    ...state,
                    basketItems: state.basketItems.map(elem => {
                        if(elem.id === newItem.id) {
                            return {...elem, count: elem.count + 1 }
                        }
                        return elem
                    })
                }
            } else {
                return {
                ...state,
                basketItems: [...state.basketItems, 
                    {...action.payload,
                        count: 1
                    }
                ]}
            }
        case INCR_COUNT:
            return {
                ...state,
                basketItems: state.basketItems.map(elem => 
                elem.id === action.payload 
                ? {...elem, count: elem.count + 1 }
                : elem
            )
            }
        case DECR_COUNT:
            return {
                ...state,
                basketItems: state.basketItems.map(elem => 
                    elem.id === action.payload 
                    ? elem.count > 1 
                        ? {...elem, count: elem.count - 1 }
                        : null
                    : elem    
                ).filter(Boolean) 
            }
        case REM_ELEM :
            return {
                ...state,
                basketItems: state.basketItems.filter(elem => elem.id !== action.payload)
            }
        case RESET_BASKET :
            return {
                ...state,
                basketItems: localStorage.removeItem('goods'),
                totalPrice: 0
            }
        case SET_TOTAL_PRICE :
            return {
            ...state,
            totalPrice: action.payload
        }

            default: return state
    }
}

export default BasketReducer

export const addToCart = (payload) => ({type: ADD_TO_CART, payload})
export const incrCount = (payload) => ({type: INCR_COUNT, payload})
export const decrCount = (payload) => ({type: DECR_COUNT, payload})
export const remElem = (payload) => ({type:REM_ELEM, payload})
export const resetBasket = () => ({type: RESET_BASKET})
export const setTotalPrice = (payload) => ({type: SET_TOTAL_PRICE, payload})
