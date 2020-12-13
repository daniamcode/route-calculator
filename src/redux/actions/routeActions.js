import actionTypes from "./actionTypes";
import axios from "axios";
import {
    option1,
    option2
} from '../../data/constants';
import getFee from '../../scripts/getFee';
import {
    googleMapsApiKey
} from "../../data/constants";


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
        cost = Math.round((distance * (parseFloat(costRatio) + getFee(vehicle)) + Number.EPSILON) * 100) / 100
        return ({
            type: actionTypes.LOAD_COST,
            payload: {
                cost
            }
        });
    } else if (option === option2) {
        return async function (dispatch) {
            let isLoading = true;
            dispatch({
                type: actionTypes.LOAD_COST,
                payload: {
                    isLoading
                }
            });
            const originGeoCoded = await axios.get(
                `https://maps.googleapis.com/maps/api/geocode/json?address=${origin}&key=${googleMapsApiKey}`
            )
            const destinationGeoCoded = await axios.get(
                `https://maps.googleapis.com/maps/api/geocode/json?address=${destination}&key=${googleMapsApiKey}`
            )
            const originGeoCodedFormatted = originGeoCoded?.data?.results[0]?.geometry?.location
            const destinationGeoCodedFormatted = destinationGeoCoded?.data?.results[0]?.geometry?.location

            const osrmResponse = await axios.get(
                    `http://router.project-osrm.org/route/v1/driving/${originGeoCodedFormatted.lng},${originGeoCodedFormatted.lat};${destinationGeoCodedFormatted.lng},${destinationGeoCodedFormatted.lat}`
                )
                .catch(error => {
                    if (!error.response) {
                        error.response = 'Network Error'
                    }
                    isLoading = false;
                    dispatch({
                        type: actionTypes.LOAD_COST,
                        payload: {
                            //error,
                            isLoading
                        }
                    })
                })
            if (osrmResponse !== undefined) {
                isLoading = false;
                cost = Math.round((osrmResponse?.data?.routes[0]?.distance / 1000 * (parseFloat(costRatio) + getFee(vehicle)) + Number.EPSILON) * 100) / 100
                console.log(originGeoCodedFormatted)
                dispatch({
                    type: actionTypes.LOAD_COST,
                    payload: {
                        cost,
                        isLoading,
                        option,
                        originGeoCodedFormatted,
                        destinationGeoCodedFormatted
                    }
                });
            }
        }
    } else {
        console.log("No option 1 or 2?")
    }
}