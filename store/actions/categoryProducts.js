import { productData } from '../../data';
import * as actionTypes from './actionTypes';

export const updateCategoryName = (categoryName) => {
    return dispatch => {
        dispatch({ type: actionTypes.UPDATE_CATEGORYNAME, payload: { categoryName: categoryName } })
    }
}

export const updateCategoryType = (categoryType) => {
    return dispatch => {
        dispatch({ type: actionTypes.UPDATE_CATEGORYTYPE, payload: { categoryType: categoryType } })
    }
}

//this doesnt have actionTypes & reducer
export const returnSpecificProducts = (url) => {
    return dispatch => {
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(productData)
            }, 1000);
        })
    }
}
