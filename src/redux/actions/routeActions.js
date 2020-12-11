import actionTypes from "./actionTypes";
import axios from "axios";
import {
    option1,
    option2
} from '../../data/constants';
import getFee from '../../scripts/getFee'

export const showCost = () => {
    let showCost = true;
    return ({
        type: actionTypes.SHOW_COST,
        payload: showCost
    });
}

export const loadCost = (option, vehicle, distance, origin, destination, costRatio) => {
    let cost;
    if (option === option1) {
        console.log(costRatio)
        cost = Math.round((distance * costRatio + distance * getFee(vehicle) + Number.EPSILON) * 100) / 100
        return ({
            type: actionTypes.LOAD_COST,
            payload: {
                cost
            }
        });
    }
    if (option === option2) {
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
                cost = Math.round((response?.data?.routes[0]?.distance / 1000 * costRatio + response?.data?.routes[0]?.distance / 1000 * getFee(vehicle) + Number.EPSILON) * 100) / 100
                console.log(response?.data?.routes[0]?.distance)
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