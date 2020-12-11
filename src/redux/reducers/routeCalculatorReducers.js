import actionTypes from '../actions/actionTypes';

const routeCalculatorReducers = (state = {}, action = {}) => {
    switch (action.type) {
        case actionTypes.LOAD_ROUTE:
        return {
          ...state,
          loadRoute: action.payload
        };
      default:
        return state;
    }
  }
  
  export default routeCalculatorReducers