import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../utility"
const initialState = {
    carouselData: null
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.FETCH_CAROUSEL_DATA:
            return updateObject(state, action.payload)

        default: return state;

    }
}

export default reducer;
