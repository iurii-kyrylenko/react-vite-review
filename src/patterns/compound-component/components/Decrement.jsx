import React from "react";
import { useCounterContext } from "../useCounterContext";
import { StyledButton } from "./StyledButton";

function Decrement() {
  const { handleDecrement } = useCounterContext();
  return (
    <StyledButton onClick={handleDecrement}>-</StyledButton>
  );
}

export { Decrement };
