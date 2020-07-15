/** @jsx jsx */
import { jsx, css, ClassNames } from '@emotion/core';
import styled from '@emotion/styled';
import React, { useState, useReducer } from 'react';
import { COLOR_PALETTE } from './AppStyle';

const Section = styled.section`
  background-color: white;
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
const Number = styled.div`
  width: 150px;
  border: 1px solid ${COLOR_PALETTE.pastel_green};
  margin: 20px;
  padding: 10px; 
  color: ${COLOR_PALETTE.pastel_green};
  font-size: 100px;
  text-align: center;
  border-radius: 5px;
`;
const results = css`
  display: flex;
`
const buttons = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5px;
`
const Button = styled.button`
  /* height: 20px; */
  width: 60px;
  font-size: 40px;
  font-weight: bold;
  color: ${COLOR_PALETTE.pastel_green};
  background-color:${COLOR_PALETTE.background_navy_blue};
  border: 1px solid ${COLOR_PALETTE.pastel_green};
  border-radius: 3px;
  margin: 5px 0;
  &:hover {
    color: ${COLOR_PALETTE.background_navy_blue};
    background-color: ${COLOR_PALETTE.pastel_green};
  }
  
`


const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_HOST":
      return { ...state, resultHost: state.resultHost + 1 };
    case "DECREMENT_HOST":
      return { ...state, resultHost: state.resultHost - 1 };
    case "INCREMENT_GUEST":
      return { ...state, resultGuest: state.resultGuest + 1 };
    case "DECREMENT_GUEST":
      return { ...state, resultGuest: state.resultGuest - 1 };
    default:
      return state;
  }
}

const initialResult = {
  resultHost: 0,
  resultGuest: 0,
};


const Board = () => {
  // const [resultHost, setResultHost] = useState(0);
  // const [resultGuest, setResultGuest] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialResult);

  return (
    <section
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 300px;
        width: 600px;
        background-color:${COLOR_PALETTE.background_navy_blue};
        border-radius: 15px;
      `}
    >
      <div css={results}>
        <div css={buttons}>
          {/* <Button onClick={() => setResultHost(resultHost + 1)}>+</Button> */}
          <Button onClick={() => dispatch({ type: "INCREMENT_HOST" })}>+</Button>
          <Button onClick={() => dispatch({ type: "DECREMENT_HOST" })}>-</Button>
        </div>
        <Number>{state.resultHost}</Number>
      </div>
      <div css={results}>
        <Number>{state.resultGuest}</Number>
        <div css={buttons}>
          <Button onClick={() => dispatch({ type: "INCREMENT_GUEST" })}>+</Button>
          <Button onClick={() => dispatch({ type: "DECREMENT_GUEST" })}>-</Button>
        </div>
      </div>
    </section>
  )
}

const App = () => {
  return (
    <Section>
      <Board />
    </Section>
  );
}

export default App;

