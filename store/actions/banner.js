import * as actionTypes from './actionTypes';
import { bannerData } from "../../data";

export const fetchBanner = () => {
    return dispatch => {
        setTimeout(() => {
            let data = bannerData;
            dispatch({ type: actionTypes.FETCH_BANNER, payload: { bannerData: data } })
        }, 3000)
    }
}