import rootReducer from "../redux/reducers/rootReducer";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';

const initialState = {
    routeCalculatorReducer: {showCost: false, loadCost: {cost: 0, isLoading: false, option: "", error: {}}},
  };

const configureStore = (initialState) => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)));
}

export { initialState }
export default configureStore