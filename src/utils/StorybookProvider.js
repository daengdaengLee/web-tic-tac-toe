import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// import Reducers
import gamesReducer from '../ducks/games';

// create Store
const store = createStore(
  gamesReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // enable Redux DevTools Extension
);

const StorybookProvider = ({ story }) => (
  <Provider store={store}>
    {story}
  </Provider>
);

export default StorybookProvider;