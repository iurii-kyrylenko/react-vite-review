import React, { useState } from "react";
import Counter from "./Counter";

function Usage({ initialValue = 40 }) {
  const [count, setCount] = useState(initialValue);

  const handleChangeCounter = count => {
    console.log(count);
    setCount(count);
  };

  return (
    <Counter value={count} onChange={handleChangeCounter}>
      <Counter.Decrement />
      <Counter.Label>Count</Counter.Label>
      <Counter.Count max={42} />
      <Counter.Increment />
    </Counter>
  )
}

export default Usage;
