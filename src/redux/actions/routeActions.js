import actionTypes from "./actionTypes";
import axios from "axios";

export const showCost = () => {
    let showCost = true;
    return ({
        type: actionTypes.SHOW_COST,
        payload: showCost
    });
}

export const loadCost = (distance, costRatio) => {
    let cost = distance * costRatio;
    return ({
        type: actionTypes.LOAD_COST,
        payload: cost
    });
}

export const getDistance = (origin, destination) => {
    return async function (dispatch) {
        let isLoading = true;
        dispatch({
            type: actionTypes.GET_DISTANCE,
            payload: {
                isLoading
            }
        });
        const response = await axios.get(
            'http://router.project-osrm.org/route/v1/driving/41.3879,2.16992;41.98311,2.82493'
            )
            .catch(error => {
                if (!error.response) {
                    error.response = 'Network Error'
                }
                isLoading = false;
                dispatch({
                    type: actionTypes.GET_DISTANCE,
                    payload: {
                        error,
                        isLoading
                    }
                })
            })
        if (response !== undefined) {
            isLoading = false;
            console.log(response)
            dispatch({
                type: actionTypes.GET_DISTANCE,
                payload: {
                    response,
                    isLoading
                }
            });
        }
    }
}
