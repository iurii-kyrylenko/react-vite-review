import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { CounterProvider } from "./useCounterContext";
import { Count, Label, Increment, Decrement } from "./components";

function Counter({ children, onChange, initalValue = 0 }) {
  const [count, setCount] = useState(initalValue);

  const didMount = useRef(true);

  useEffect(() => {
    if (didMount.current) {
      didMount.current = false;
    } else {
      onChange(count);
    }
  }, [count]);

  const handleIncrement = () => setCount(count + 1);;

  const handleDecrement = () => setCount(Math.max(0, count - 1));

  return (
    <CounterProvider value={{ count, handleIncrement, handleDecrement }}>
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
