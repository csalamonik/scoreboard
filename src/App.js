/** @jsx jsx */
import { jsx, css, ClassNames } from '@emotion/core';
import styled from '@emotion/styled';
import React, { createContext, useContext, useReducer } from 'react';
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
  border: 1px solid ${COLOR_PALETTE.pastel_green};
  margin: 20px;
  padding: 10px; 
  color: ${COLOR_PALETTE.pastel_green};
  font-size: 30px;
  text-align: center;
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


const Board = () => {
  return (
    <section
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 300px;
        width: 400px;
        background-color:${COLOR_PALETTE.background_navy_blue};
      `}
    >
      <div css={results}>
        <div css={buttons}>
          <button >+1</button>
          <button>-1</button>
        </div>
        <Number>0</Number>
      </div>
      <div css={results}>
        <Number>1</Number>
        <div css={buttons}>
          <button>+1</button>
          <button>-1</button>
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

