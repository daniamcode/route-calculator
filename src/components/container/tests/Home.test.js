import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../../../redux/configureStore';
import Home from '../Home';
import userEvent from '@testing-library/user-event'

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

  xtest('Should execute handleSubmit and call showStatus and loadStatus when clicking "Check"', () => {
    const state = {
      
    };
    wrapper = wrapperFactory(state);

    render(<LandingPage />, { wrapper });

    const form = document.querySelector('.status__form');

    fireEvent.submit(form);

    expect(showStatus).toHaveBeenCalled();
    expect(loadStatus).toHaveBeenCalled();
  });

  xtest('Manage input field', () => {
    const state = {
      
    };
    wrapper = wrapperFactory(state);

    render(<LandingPage />, { wrapper });

    userEvent.type(screen.getByRole('textbox'), 'google.com')
    expect(screen.getByRole('textbox')).toHaveValue('google.com')
  });
})