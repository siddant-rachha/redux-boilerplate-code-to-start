import * as actionTypes from './actionTypes';
import { productData } from "../../data";

export const fetchHomeProducts = () => dispatch => new Promise((resolve, reject) => {
    dispatch({ type: actionTypes.HOMEPRODUCTS_LOADING, payload: { loading: true } })
    setTimeout(() => {
        let data = productData;
        dispatch({ type: actionTypes.FETCH_HOMEPRODUCTS, payload: { productData: data, loading: false } })
        resolve(data)
    }, 2000)
})