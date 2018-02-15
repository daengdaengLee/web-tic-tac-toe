import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// import reducers
import gamesReducer from './ducks/games';

// import Components
import ChooseMarker from './components/molecules/ChooseMarker';
import DisplayMarker from './components/molecules/DisplayMarker';

// create store
let store = createStore(gamesReducer);

function App() {
  return (
    <Provider store={store}>
      <div>
        <DisplayMarker />
        <ChooseMarker />
      </div>
    </Provider>
  );
}

export default App;
