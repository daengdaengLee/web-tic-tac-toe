// Import

// Actions

const CHOOSE_MARKER = 'tic-tac-toe/games/CHOOSE_MARKER';
const SELECT_SQUARE = 'tic-tac-toe/games/SELECT_SQUARE';

// Action Creators

export function chooseMarker(marker) {
  return { type: CHOOSE_MARKER, marker };
}

export function selectSquare(squareID) {
  return { type: SELECT_SQUARE, squareID };
}

// Reducer

const initState = {
  gameProcess: 'chooseMarker',  // 'chooseMarker', 'isPlaying'
  gameStatus: ['', '', '', '', '', '', '', '', ''],
  playerMarker: '',
  computerMarker: '',
};

export default function reducer(state = initState, action = {}) {
  switch(action.type) {
    case CHOOSE_MARKER: return applyChooseMarker(state, action);
    default: return state;
  }
}

// Reducer Functions

function applyChooseMarker(state, action) {
  switch(action.marker) {
    case 'X':
      return {
        ...state,
        gameProcess: 'isPlaying',
        playerMarker: 'X',
        computerMarker: 'O',
      };
    case 'O':
      return {
        ...state,
        gameProcess: 'isPlaying',
        playerMarker: 'O',
        computerMarker: 'X',
      };
    default: return state;
  }
}