// Actions

import { CHOOSE_MARKER, SELECT_SQUARE, COMPUTER_CALL, IS_PLAYER_WIN, IS_GAME_END } from './actions';

// Action Creators

export function chooseMarker(marker) {
  return { type: CHOOSE_MARKER, marker };
}
export function selectSquare(squareID) {
  return { type: SELECT_SQUARE, squareID };
}

// Reducer

const initState = {
  gameProcess: 'chooseMarker',  // 'chooseMarker', 'isPlaying', 'endGame'
  gameStatus: ['', '', '', '', '', '', '', '', ''],
  playerMarker: '',
  computerMarker: '',
  winner: '', // 'player', 'computer', 'draw'
};

export default function reducer(state = initState, action = {}) {
  switch(action.type) {
    case CHOOSE_MARKER: return applyChooseMarker(state, action);
    case SELECT_SQUARE: return applySelectSquare(state, action);
    case IS_PLAYER_WIN: return applyIsPlayerWin(state);
    case COMPUTER_CALL: return applyComputerCall(state);
    case IS_GAME_END: return applyIsGameEnd(state);
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

function applySelectSquare(state, action) {
  const frontEndStatus = state.gameStatus.slice(0, action.squareID);
  const backEndStatus = state.gameStatus.slice(action.squareID + 1);
  switch(state.playerMarker) {
    case 'X':
      return {
        ...state,
        gameStatus: frontEndStatus.concat('X', backEndStatus),
      };
    case 'O':
      return {
        ...state,
        gameStatus: frontEndStatus.concat('O', backEndStatus),
      };
    default: return state;
  }
}

function applyIsPlayerWin(state) {
  const { playerMarker, gameStatus } = state;
  if(isWinner(playerMarker, gameStatus)) return {
    ...state,
    winner: 'player',
    gameProcess: 'endGame',
  };
  return state;
}

function applyComputerCall(state) {
  const { playerMarker, computerMarker, gameStatus } = state;

  // 다음에 이길 수 있는지 검사
  // 이길 수 있다면 승리 조건이 담긴 배열 반환
  // 이길 수 없다면 computerMarker 반환
  const isComWin = gameStatus.reduce((acc, cur, curIndex, arr) => {
    // 이미 승리 조건을 찾은 경우, 승리 조건이 acc 이기 때문에 그대로 반환
    if(Array.isArray(acc)) return acc;
    // 이번 칸에 둘 수 없기 때문에 다음 칸을 검사하기 위해 그대로 반환
    if(cur === 'X' || cur === 'O') return acc;
    // 빈 칸을 컴퓨터가 둠
    const testStatus = arr.slice(0, curIndex).concat(acc, arr.slice(curIndex + 1));
    // 컴퓨터가 둔 결과가 승리가 아니라면 computerMarker 인 acc 를 그대로 반환
    if(!isWinner(acc, testStatus)) return acc;
    // 컴퓨터가 둔 결과가 승리이기 때문에 승리 조건을 담은 배열을 acc 로 반환
    return testStatus;
  }, computerMarker);
  if(Array.isArray(isComWin)) return {
    ...state,
    gameStatus: isComWin,
    winner: 'computer',
    gameProcess: 'endGame',
  };

  // 상대방이 다음에 이길 수 있다면 막는다.
  // 상대방이 다음에 이길 수 있다면 방어 조건을 담은 배열 반환
  // 상대방이 다음에 이길 수 없다면 playerMarker 반환
  const isPlayerWin = gameStatus.reduce((acc, cur, curIndex, arr) => {
    // 이미 방어 조건을 찾은 경우, 방어 조건이 acc 이기 때문에 그대로 반환
    if(Array.isArray(acc)) return acc;
    // 이번 칸에 둘 수 없기 때문에 다음 칸을 검사하기 위해 그대로 반환
    if(cur === 'X' || cur === 'O') return acc;
    // 빈 칸을 플레이어가 둔다고 가정
    const testStatus = arr.slice(0, curIndex).concat(acc, arr.slice(curIndex + 1));
    // 플레이어가 둔 결과가 승리가 아니라면 playerMarker 인 acc 를 그대로 반환
    if(!isWinner(acc, testStatus)) return acc;
    // 플레이어가 둔 결과가 승리라면 그 자리에 컴퓨터가 둔 방어 조건을 담은 배열을 만들어서 acc 로 반환
    const computerMarker = playerMarker === 'X' ? 'O' : 'X';
    return arr.slice(0, curIndex).concat(computerMarker, arr.slice(curIndex + 1));
  }, playerMarker);
  if(Array.isArray(isPlayerWin)) return {
    ...state,
    gameStatus: isPlayerWin,
  };

  // 플레이어가 둔 곳 중 삼 면이 비어 있으면 먼저 방어한다.
  const defense = gameStatus.reduce((acc, cur, curIndex, arr) => {
    if(Array.isArray(acc)) return acc;
    const computerMarker = playerMarker === 'X' ? 'O' : 'X';
    if(
      (arr[0] === playerMarker && arr[1] === '' && arr[3] === '' && arr[4] === '') ||
      (arr[1] === playerMarker && arr[0] === '' && arr[2] === '' && arr[4] === '') ||
      (arr[2] === playerMarker && arr[1] === '' && arr[4] === '' && arr[5] === '') ||
      (arr[3] === playerMarker && arr[0] === '' && arr[4] === '' && arr[6] === '') ||
      (arr[5] === playerMarker && arr[2] === '' && arr[4] === '' && arr[8] === '') ||
      (arr[6] === playerMarker && arr[3] === '' && arr[4] === '' && arr[7] === '') ||
      (arr[7] === playerMarker && arr[4] === '' && arr[6] === '' && arr[8] === '') ||
      (arr[8] === playerMarker && arr[4] === '' && arr[5] === '' && arr[7] === '')
    ) return arr.slice(0, 4).concat(computerMarker, arr.slice(5));
    return acc;
  }, playerMarker);
  if(Array.isArray(defense)) return {
    ...state,
    gameStatus: defense,
  };

  // 만약 비어 있으면 코너를 차지한다.
  if(gameStatus[0] === '') return {
    ...state,
    gameStatus: [computerMarker].concat(gameStatus.slice(1)),
  };
  if(gameStatus[2] === '') return {
    ...state,
    gameStatus: gameStatus.slice(0, 2).concat(computerMarker, gameStatus.slice(3)),
  };
  if(gameStatus[6] === '') return {
    ...state,
    gameStatus: gameStatus.slice(0, 6).concat(computerMarker, gameStatus.slice(7)),
  };
  if(gameStatus[8] === '') return {
    ...state,
    gameStatus: gameStatus.slice(0, 8).concat(computerMarker),
  };

  // 만약 비어 있으면 중앙을 차지한다.
  if(gameStatus[4] === '') return {
    ...state,
    gameStatus: gameStatus.slice(0, 4).concat(computerMarker, gameStatus.slice(5)),
  };

  // 한 쪽 면으로 이동한다.
  if(gameStatus[1] === '') return {
    ...state,
    gameStatus: gameStatus.slice(0, 1).concat(computerMarker, gameStatus.slice(2)),
  };
  if(gameStatus[3] === '') return {
    ...state,
    gameStatus: gameStatus.slice(0, 3).concat(computerMarker, gameStatus.slice(4)),
  };
  if(gameStatus[5] === '') return {
    ...state,
    gameStatus: gameStatus.slice(0, 5).concat(computerMarker, gameStatus.slice(6)),
  };
  if(gameStatus[7] === '') return {
    ...state,
    gameStatus: gameStatus.slice(0, 7).concat(computerMarker, gameStatus.slice(8)),
  };
  
  // 아무 경우도 아닌 경우
  return state;
}

function applyIsGameEnd(state) {
  if(state.gameStatus.includes('')) return state;
  return {
    ...state,
    gameProcess: 'endGame',
    winner: 'draw',
  };
}

// utils

function isWinner(marker, status) {
  return (
    (status[0] === marker && status[1] === marker && status[2] === marker) || // 첫 번째 행
    (status[3] === marker && status[4] === marker && status[5] === marker) || // 두 번째 행
    (status[6] === marker && status[7] === marker && status[8] === marker) || // 세 번째 행
    (status[0] === marker && status[3] === marker && status[6] === marker) || // 첫 번째 열
    (status[1] === marker && status[4] === marker && status[7] === marker) || // 두 번째 열
    (status[2] === marker && status[5] === marker && status[8] === marker) || // 세 번째 열
    (status[0] === marker && status[4] === marker && status[8] === marker) || // 첫 번째 대각선
    (status[2] === marker && status[4] === marker && status[6] === marker)    // 두 번째 대각선
  );
}