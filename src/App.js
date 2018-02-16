import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware  from 'redux-saga';
import { Provider } from 'react-redux';

// import reducers
import gamesReducer from './ducks/games';

// import sagas
import mySaga from './ducks/games/sagas';

// import Components
import GamePage from './components/pages/GamePage';

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

// create store
const store = createStore(
  gamesReducer,
  applyMiddleware(sagaMiddleware)
);

// then run the saga
sagaMiddleware.run(mySaga);

function App() {
  return (
    <Provider store={store}>
      <GamePage />
    </Provider>
  );
}

export default App;
