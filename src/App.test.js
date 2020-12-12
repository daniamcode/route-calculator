import { render, screen } from '@testing-library/react';
import App from './App';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './redux/reducers/rootReducer';
import {createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';

jest.mock('react-google-maps')

test('renders some text', () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
  
  render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>);
  const textElement = screen.getByText(/This is a Route Cost Calculator for Hedyla/);
  
  expect(textElement).toBeInTheDocument();
});

