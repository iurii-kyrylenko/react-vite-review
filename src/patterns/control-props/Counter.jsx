import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { CounterProvider } from "./useCounterContext";
import { Count, Label, Increment, Decrement } from "./components";

function Counter({ children, onChange, value }) {
  const handleIncrement = () => onChange(value + 1);

  const handleDecrement = () => onChange(Math.max(0, value - 1));

  return (
    <CounterProvider value={{ count: value, handleIncrement, handleDecrement }}>
      <StyledCounter>{children}</StyledCounter>
    </CounterProvider>
  );
}

const StyledCounter =  styled.div`
  display: inline-flex;
  border: 1px solid #17a2b8;
  line-height: 1.5;
  border-radius: 0.25rem;
  overflow: hidden;
`;

Counter.Count = Count;
Counter.Label = Label;
Counter.Increment = Increment;
Counter.Decrement = Decrement;

export default Counter;
