import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../../../redux/configureStore';
import Form from '../Form';
import userEvent from '@testing-library/user-event'
import { showCost, loadCost } from "../../../redux/actions/routeActions";
import {option1, option2} from '../../../data/constants'

jest.mock('../../../redux/actions/routeActions');

describe('Form Component', () => {
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

  test('Should render form', () => {
    const state = {}
    wrapper = wrapperFactory(state);

    render(<Form />, { wrapper });

    expect(document.querySelector('.home__form')).toBeInTheDocument();
  })

  xtest('Should render type of vehicle question', () => {
    const state = {showCost: false, loadCost: {cost: 0, isLoading: false, option: option2, error: {}}}
    wrapper = wrapperFactory(state);

    render(<Form />, { wrapper });

    expect(document.querySelector('.home__form-input')).toBeInTheDocument();
  })
})