# Web Tic Tac Toe Game
> 웹 tic tac toe 게임입니다.

## 둘러보기

0. [들어가며](#0-들어가며)
1. [데모 페이지](#1-데모-페이지)
2. [컴포넌트](#2-컴포넌트)
3. [HOC](#3-hoc)
4. [Redux](#4-redux)
5. [마치며](#5-마치며)

## 0. 들어가며

React 기반 web Tic Tac Toe 게임입니다.

Redux 를 이용해 상태 관리를 하고 있습니다. React 컴포넌트와 연결하기 위해 react-redux 모듈을 사용했습니다. Redux ducks 구조를 따라 개발했습니다. 특정 액션에 반응하는 미들웨어를 작성하기 위해 redux-saga 모듈을 사용했습니다.

Atomic Design 을 반영하여 개발했습니다.

## 1. 데모 페이지

데모 페이지는 여기에서 확인할 수 있습니다.

로컬에서 실행할 경우 git, node.js, npm 이 필요합니다.

1. git 을 이용해 프로젝트를 클론합니다.
2. npm install 명령어로 필요한 패키지를 설치합니다.
3. npm start 명령어로 개발 서버를 실행합니다.

## 2. 컴포넌트

- [Atoms](#atoms)
  - [Div](#div)
  - [H](#h)
  - [P](#p)
  - [Header](#header)
  - [Button](#button)
  - [Span](#span)
- [Molecules](#molecules)
  - [MainTitle](#maintitle)
  - [ChooseMarkerFrom](#choosemarkerForm)
  - [DisplayMarker](#displaymarker)
  - [Square](#square)
  - [ChooseMarkerLabel](#choosemarkerlabel)
  - [DisplayWinner](#displaywinner)
- [Organisms](#organisms)
  - [MainHeader](#mainheader)
  - [GameBoard](#gameboard)
  - [ChooseMarker](#choosemarker)
- [Templates](#templates)
  - [GameTemplate](#gametemplate)
- [Pages](#pages)
  - [GamePage](#gamepage)

### Atoms

기본 HTML 태그를 커스터마이징한 컴포넌트입니다.

#### Div

- props:
  - children: node
  - styleNames: array of string

- return:
  - div tag

#### H

- props:
  - headingName: one of ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], isRequired
  - children: node, isRequired
    - h1 ~ h6 태그 사이에 a 태그나 span 태그가 올 수 있기 때문에 node 로 처리

- return:
  - h1 ~ h6 tag

#### P

- props:
  - children: node, isRequired
    - p 태그 사이에 a 태그나 span 태그가 올 수 있기 때문에 node 로 처리

- return:
  - p tag

#### Header

- props:
  - children: node, isRequired

- return:
  - header tag

#### Button

- props:
  - children: node, isRequired
  - onClick: function

- return:
  - button tag

#### Span

- props:
  - children: node
  - styleNames: array of string
  - onClick: function

- return:
  - span tag

### Molecules

Atoms 를 바탕으로 조합한 가장 기초적인 기능을 가지고 있는 컴포넌트 블록입니다.

한 Molecule 은 하나의 기능만 수행하도록 설계합니다.

#### MainTitle

- return:
  - H Component -> h1 tag
    ```html
    <h1>Tic Tac Toe</h1>
    ```

#### ChooseMarkerForm

- props:
  - chooseMarker: function, isRequired, connected to store state

- return:
  - 마커 선택 버튼 세트
    ```html
    <div>
      <!-- X 마커 버튼 -->
      or
      <!-- O 마커 버튼 -->
    </div>
    ```

- reducer:
  - games 리듀서와 연결
  - chooseMarker 액션 생성자를 chooseMarker prop 에 연결

#### DisplayMarker

- props:
  - playerMarker: string, isRequired, connected to store state
  - computerMarker: string, isRequired, connected to store state

- return:
  - 마커 선택 결과 표시창
    ```html
    <p>player: <!-- 플레이어가 선택한 마커 -->, computer: <!-- 컴퓨터의 마커 --></p>
    ```

- reducer:
  - games 리듀서와 연결
  - playerMarker, computerMarker state 를 playerMarker, computerMarker props 에 연결

#### Square

- props:
  - mark: string, isRequired
  - id: number, isRequired
  - selectSquare: function, isRequired
    클릭하면 selectSquare(id) 가 실행됨

- return:
  - 게임 보드 한 칸
    ```html
    <span>X</span>
    ```

#### ChooseMarkerLabel

- return:
  ```html
  <p>Choose your marker</p>
  ```

#### DisplayWinner

- props:
  - winner: string, isRequired, connected to store state

- return:
  - 승자 표시 판
  ```html
  <p> <!-- 승자 --> </p>
  ```

- reducer:
  - games 리듀서와 연결
  - winner state 를 winner prop 에 연결

### Organisms

Atoms 나 Molecules 를 조합하여 만든 인터페이스의 한 영역입니다.

#### MainHeader

- return:
  - 페이지 헤더
    ```html
    <header>
      <h1>Tic Tac Toe</h1>
    </header>
    ```

#### GameBoard

- props:
  - gameStatus: array of one of [ 'X', 'O', '' ], isRequired, connected to store state
- return:
  - 게임 보드 판
    ```html
    <div>
      <!-- 마커 표시 -->
      <div>
        <span>X</span>
        <span>O</span>
        <!-- ...... -->
      </div>
    </div>
    ```
- reducer:
  - games 리듀서에 연결
  - gameStatus state 를 gameStatus prop 에 연결

#### ChooseMarker

- return:
  - 마커 선택 영역
  ```html
  <div>
    <!-- 마커 선택 영역 라벨 -->
    <!-- 마커 선택 버튼 -->
  </div>
  ```

### Templates

화면 레이아웃을 설계하는 컴포넌트입니다.

#### GameTemplate

- props:
  - header: node, isRequired
  - gameDisplay: node, isRequired

- return:
  - 게임 화면
    ```html
    <div>
      <!-- Header -->
      <!-- 게임 진행 판 -->
    </div>
    ```

### Pages

Template Component 의 특정 인스턴스입니다.

#### GamePage

- props:
  - gameProcess: string, isRequired, connected to store state

- return:
  - 게임 화면
    ```html
    <div>
      <!-- Header -->
      <!-- 게임 진행 판 -->
    </div>
    ```

- reducer:
  - games 리듀서에 연결
  - gameProcess state 를 gameProcess prop 에 연결

## 3. HOC
> Higher Order Components

- [withValidProps](#withvalidprops)
- [withValidStyleNames](#withvalidstylenames)

### withValidProps

- params:
  0. validator:
    반환 할 컴포넌트가 받을 props 를 검사하여 올바른 형태의 props 를 반환하는 함수
  1. Comp:
    HOC 에서 반환할 컴포넌트가 랜더링할 컴포넌트

- return: Component
  - 모든 props 는 validator 를 통해서만 Component 에 전달된다.

### withValidStyleNames

- params:
  0. validStyleNames:
    올바른 styleNames 를 담고 있는 배열
  1. Comp:
    HOC 에서 반환할 컴포넌트가 랜더링할 컴포넌트

- return: Component
  - 모든 props 는 styleNames prop 을 가진 상태가 된다.
  - 올바르지 않은 styleName 은 제거된다.


## 4. Redux

- [games](#games)

### games

- state:
  - gameProcess:
    'chooseMarker', 'isPlaying', 'endGame'
  - gameStatus:
    게임 보드 현황을 담고 있는 배열
  - playerMarker:
    'X', 'O'
  - computerMarker:
    'X', 'O'
  - winner:
    'computer', 'player', 'draw'

## 5. 마치며

아직 디자인 작업이 완료되지 않은 상태입니다. 새로운 버전에서는 디자인을 꾸밀 예정입니다.

처음으로 돌아가려면 [여기](#web-tic-tac-toe-game)를 클릭하세요.