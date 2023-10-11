const defaultState = {
    categories: []
}

const SET_CATEGORIES = "SET_CATEGORIES"

export const CategoriesReducer = (state = defaultState, action) => {
    switch(action.type) {
        case SET_CATEGORIES:
            return {...state, categories: action.payload}
        default: return state
    }
}

export const setCategories = (payload) => ({type: SET_CATEGORIES, payload})
