import actionTypes from "./actionTypes";
import axios from "axios";


export const loadRoute = () => {
    let loadRoute = 'this is a first test';
    return ({
        type: actionTypes.LOAD_ROUTE,
        payload: loadRoute
    });
}
