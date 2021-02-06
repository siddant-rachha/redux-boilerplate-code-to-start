import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../utility"
const initialState = {
    productData: null,
    loading: false
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.FETCH_HOMEPRODUCTS:
            return updateObject(state, action.payload)
        case actionTypes.HOMEPRODUCTS_LOADING:
            return updateObject(state, action.payload)

        default: return state;

    }
}

export default reducer;
