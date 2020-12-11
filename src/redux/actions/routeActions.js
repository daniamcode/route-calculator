import actionTypes from "./actionTypes";
import axios from "axios";


export const loadCost = (distance, costRatio) => {
    let cost = distance * costRatio;
    return ({
        type: actionTypes.LOAD_COST,
        payload: cost
    });
}
