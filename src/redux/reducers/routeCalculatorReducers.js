import actionTypes from '../actions/actionTypes';

const routeCalculatorReducers = (state = {}, action = {}) => {
    switch (action.type) {
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