/** @jsx jsx */
import { jsx, css, ClassNames } from '@emotion/core';
import styled from '@emotion/styled';
import React, { useReducer, useContext, createContext } from 'react';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
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

const ACTION_TYPES = {
  INCREMENT_HOST: 'INCREMENT_HOST',
  DECREMENT_HOST: 'DECREMENT_HOST',
  INCREMENT_GUEST: 'INCREMENT_GUEST',
  DECREMENT_GUEST: 'DECREMEN_GUEST'
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT_HOST:
      return { ...state, resultHost: state.resultHost + 1 };
    case ACTION_TYPES.DECREMENT_HOST:
      return { ...state, resultHost: state.resultHost - 1 };
    case ACTION_TYPES.INCREMENT_GUEST:
      return { ...state, resultGuest: state.resultGuest + 1 };
    case ACTION_TYPES.DECREMENT_GUEST:
      return { ...state, resultGuest: state.resultGuest - 1 };
    default:
      return state;
  }
}

const initialResult = {
  resultHost: 0,
  resultGuest: 0,
};

const store = createStore(reducer, initialResult);

const mapStateToProps = state => {
  return {
    resultHost: state.resultHost,
    resultGuest: state.resultGuest,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    incrementHost: () => dispatch({ type: ACTION_TYPES.INCREMENT_HOST }),
    decrementHost: () => dispatch({ type: ACTION_TYPES.DECREMENT_HOST }),
    incrementGuest: () => dispatch({ type: ACTION_TYPES.INCREMENT_GUEST }),
    decrementGuest: () => dispatch({ type: ACTION_TYPES.DECREMENT_GUEST })
  }
}

const ReduxContext = createContext();

const Board = (props) => {
  // const { state, dispatch } = useContext(ReduxContext);
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
          {/* <Button onClick={() => dispatch({ type: ACTION_TYPES.INCREMENT_HOST })}>+</Button> */}
          <Button onClick={props.incrementHost}>+</Button>
          <Button onClick={props.decrementHost}>-</Button>
        </div>
        <Number>{props.resultHost}</Number>
      </div>
      <div css={results}>
        <Number>{props.resultGuest}</Number>
        <div css={buttons}>
          <Button onClick={props.incrementGuest}>+</Button>
          <Button onClick={props.decrementGuest}>-</Button>
        </div>
      </div>
    </section>
  )
  // }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(Board);

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialResult);

  return (
    <Section>
      {/* <ReduxContext.Provider value={{ state, dispatch }}> */}
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
      {/* </ReduxContext.Provider> */}
    </Section>
  );
}

export default App;

