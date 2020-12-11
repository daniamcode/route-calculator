import actionTypes from "./actionTypes";
import axios from "axios";
import constants from '../../constants'

export const showCost = () => {
    let showCost = true;
    return ({
        type: actionTypes.SHOW_COST,
        payload: showCost
    });
}

export const loadCost = (option, distance, origin, destination, costRatio) => {
    let cost;
    if(option === constants.option1) {        
        cost = distance * costRatio;
        return ({
            type: actionTypes.LOAD_COST,
            payload: cost
        });
    }
    if(option === constants.option2) {
        return async function (dispatch) {
            let isLoading = true;
            dispatch({
                type: actionTypes.LOAD_COST,
                payload: {
                    isLoading
                }
            });
            const response = await axios.get(
                `http://router.project-osrm.org/route/v1/driving/${origin};${destination}`
                )
                .catch(error => {
                    if (!error.response) {
                        error.response = 'Network Error'
                    }
                    isLoading = false;
                    dispatch({
                        type: actionTypes.LOAD_COST,
                        payload: {
                            error,
                            isLoading
                        }
                    })
                })
            if (response !== undefined) {
                isLoading = false;
                cost = Math.round((response?.data?.routes[0]?.distance.toFixed(2) / 1000 * costRatio + Number.EPSILON) * 100) / 100
                dispatch({
                    type: actionTypes.LOAD_COST,
                    payload: {
                        cost,
                        isLoading
                    }
                });
            }
        }
    }
}

