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

- return:
  - h1 ~ h6 tag

#### P

- props:
  - children: node, isRequired
    - p 태그 사이에 a 태그나 span 태그가 올 수 있기 때문에 node 로 처리

- return:
  - p tag