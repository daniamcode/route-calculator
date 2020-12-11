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
