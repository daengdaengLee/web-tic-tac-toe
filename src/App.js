import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// import reducers
import gamesReducer from './ducks/games';

// import Components
import DisplayMarker from './components/molecules/DisplayMarker';
import ChooseMarker from './components/organisms/ChooseMarker';
import GameBoard from './components/organisms/GameBoard';

// create store
let store = createStore(gamesReducer);

function App() {
  return (
    <Provider store={store}>
      <div>
        <DisplayMarker />
        <ChooseMarker />
        <GameBoard />
      </div>
    </Provider>
  );
}

export default App;
