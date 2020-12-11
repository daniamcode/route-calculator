import actionTypes from '../actions/actionTypes';

const routeCalculatorReducers = (state = {}, action = {}) => {
    switch (action.type) {
        case actionTypes.SHOW_COST:
        return {
          ...state,
          showCost: action.payload
        };
        case actionTypes.LOAD_COST:
        return {
          ...state,
          loadCost: action.payload
        };
      default:
        return state;
    }
  }
  
  export default routeCalculatorReducers