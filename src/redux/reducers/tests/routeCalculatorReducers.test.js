import routeCalculatorReducers from '../routeCalculatorReducers';
import { initialState } from '../../configureStore';
import actionTypes from '../../actions/actionTypes';

describe('routeCalculator reducer', () => {
  it('should handle no initial state and no action', () => {
    expect(routeCalculatorReducers()).toEqual({});
  });

  it('should handle initial state and no action', () => {
    expect(routeCalculatorReducers(initialState.routeCalculatorReducer)).toEqual({showCost: false, loadCost: {cost: 0, isLoading: false, option: "", originGeoCodedFormatted: {}, destinationGeoCodedFormatted: {}, error: {}}});
  });

  it('should handle SHOW_COST', () => {
    let result = {showCost: true, loadCost: {cost: 0, isLoading: false, option: "", originGeoCodedFormatted: {}, destinationGeoCodedFormatted: {}, error: {}}}
    expect(
      routeCalculatorReducers(
        {
          ...initialState.routeCalculatorReducer,
        },
        {
          type: actionTypes.SHOW_COST,
          payload: true
        },
      ),
    ).toEqual(
        result
    );
  })

  it('should handle LOAD_COST', () => {
    let result = {showCost: false, loadCost: {cost: 100}}
    expect(
      routeCalculatorReducers(
        {
          ...initialState.routeCalculatorReducer,
        },
        {
          type: actionTypes.LOAD_COST,
          payload: {cost: 100}
        },
      ),
    ).toEqual(
        result
    );
  })

  it('should handle default', () => {
    expect(
      routeCalculatorReducers(
        {
          ...initialState.routeCalculatorReducer,
        }
      ),
    ).toEqual({
      ...initialState.routeCalculatorReducer
    });
  })
})