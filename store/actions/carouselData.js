import * as actionTypes from './actionTypes';
import { carouselData } from "../../data"

export const fetchCarouselData = () => {
    return dispatch => {

        setTimeout(() => {
            let data = carouselData;
            dispatch({ type: actionTypes.FETCH_CAROUSEL_DATA, payload: { carouselData: data } })
        }, 3000)

    }
}