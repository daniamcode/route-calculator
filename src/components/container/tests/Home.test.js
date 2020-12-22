import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../../../redux/configureStore';
import Home from '../Home';
import { showCost, loadCost } from "../../../redux/actions/routeActions";
import {option2} from '../../../data/constants';

jest.mock('../../../redux/actions/routeActions');

describe('Home Component', () => {
  let wrapper = null;
  let store = null;
  const wrapperFactory = (wrapperState) => {
    store = configureStore(wrapperState);
    store.dispatch = jest.fn();

    return ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );
  };

  afterEach(() => {
    jest.restoreAllMocks();
    wrapper = null;
  });

  test('Should render form container', () => {
    const state = {}
    wrapper = wrapperFactory(state);

    render(<Home />, { wrapper });

    expect(document.querySelector('.home__form-container')).toBeInTheDocument();
  })

  xtest('Should render spinner', () => {
    const state = {showCost: true, loadCost: {cost: 0, isLoading: true, option: {option2}, originGeoCodedFormatted: {}, destinationGeoCodedFormatted: {}, error: {}}}
    wrapper = wrapperFactory(state);

    render(<Home />, { wrapper });

    
      expect(document.querySelector('.spinner__active')).toBeInTheDocument();
    
  })

  xtest('Should render error', () => {
    const state = {showCost: true, loadCost: {cost: 0, isLoading: false, option: "", originGeoCodedFormatted: {}, destinationGeoCodedFormatted: {}, error: {error: 'some error'}}}
    wrapper = wrapperFactory(state);

    render(<Home />, { wrapper });

    expect(document.querySelector('.error__message').innerHTML).toBe("Sorry, there was an error, we're trying to fix it!");
  })

  test('Should execute handleSubmit and call showCost and loadCost when clicking "Calculate"', () => {
    const state = {
      
    };
    wrapper = wrapperFactory(state);

    render(<Home />, { wrapper });

    const form = document.querySelector('.home__form');

    fireEvent.submit(form);

    expect(showCost).toHaveBeenCalled();
    expect(loadCost).toHaveBeenCalled();
  });
})