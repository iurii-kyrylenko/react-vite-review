import React from "react";
import { useCounterContext } from "../useCounterContext";
import { StyledButton } from "./StyledButton";

function Increment() {
  const { handleIncrement } = useCounterContext();
  return (
    <StyledButton onClick={handleIncrement}>+</StyledButton>
  );
}

export { Increment };
