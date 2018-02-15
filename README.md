# Web Tic Tac Toe Game
> 웹 tic tac toe 게임입니다.

## 둘러보기

## 컴포넌트

### Atoms

#### Div

- props:
  - children: node, isRequired

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

- return:
  - span tag

### Molecules

#### MainTitle

- return:
  - H Component -> h1 tag
    ```html
    <h1>Tic Tac Toe</h1>
    ```

#### ChooseMarker

- props:
  - chooseMarker: function, isRequired

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
  - playerMarker: string, isRequired
  - computerMarker: string, isRequired

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

- return:
  - 게임 보드 한 칸
    ```html
    <span>X</span>
    ```

### Organisms

#### MainHeader

- return:
  - 페이지 헤더
    ```html
    <header>
      <h1>Tic Tac Toe</h1>
    </header>
    ```