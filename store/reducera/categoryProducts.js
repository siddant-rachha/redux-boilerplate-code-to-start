import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../utility"
const initialState = {
    categoryName: null,
    categoryType: "latest"
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.UPDATE_CATEGORYNAME:
            return updateObject(state, action.payload)
        case actionTypes.UPDATE_CATEGORYTYPE:
            return updateObject(state, action.payload)
        default: return state

    }
}

export default reducer;