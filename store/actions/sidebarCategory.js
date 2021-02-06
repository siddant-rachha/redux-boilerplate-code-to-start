import * as actionTypes from './actionTypes';
import { categories } from "../../data"

export const fetchCategories = () => {
    return dispatch => {
        dispatch({ type: actionTypes.SIDEBAR_CATEGORY_LOADING, payload: { loading: true } })
        setTimeout(() => {
            let data = categories;
            dispatch({ type: actionTypes.FETCH_SIDEBAR_CATEGORY, payload: { categories: data, loading: false } })
        }, 1000)
    }
}