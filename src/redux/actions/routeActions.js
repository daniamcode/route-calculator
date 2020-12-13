import actionTypes from "./actionTypes";
import axios from "axios";
import {
    option1,
    option2
} from '../../data/constants';
import {
    googleMapsApiKey
} from "../../data/constants";
import costCalculator from '../../scripts/costCalculator'


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
        cost = costCalculator(distance, costRatio, vehicle)
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
            try {
                const originGeoCodedRaw = await axios.get(
                    `https://maps.googleapis.com/maps/api/geocode/json?address=${origin}&key=${googleMapsApiKey}`
                )
                const destinationGeoCodedRaw = await axios.get(
                    `https://maps.googleapis.com/maps/api/geocode/json?address=${destination}&key=${googleMapsApiKey}`
                )
                const originGeoCodedFormatted = originGeoCodedRaw?.data?.results[0]?.geometry?.location
                const destinationGeoCodedFormatted = destinationGeoCodedRaw?.data?.results[0]?.geometry?.location

                const osrmResponse = await axios.get(
                    `http://router.project-osrm.org/route/v1/driving/${originGeoCodedFormatted.lng},${originGeoCodedFormatted.lat};${destinationGeoCodedFormatted.lng},${destinationGeoCodedFormatted.lat}`
                )
                if (osrmResponse !== undefined) {
                    isLoading = false;
                    const osrmResponseFormatted = osrmResponse?.data?.routes[0]?.distance / 1000
                    cost = costCalculator(osrmResponseFormatted, costRatio, vehicle)
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
            } catch (error) {
                isLoading = false;
                dispatch({
                    type: actionTypes.LOAD_COST,
                    payload: {
                        error,
                        isLoading
                    }
                })
            }
        }
    } else {
        console.log("No option 1 or 2?")
    }
}