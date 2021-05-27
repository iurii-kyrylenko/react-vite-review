import React from "react";
import Counter from "./Counter";

function Usage() {
  const handleChangeCounter = count => console.log(count);

  return (
    <Counter initalValue={40} onChange={handleChangeCounter}>
      <Counter.Decrement />
      <Counter.Label>Count</Counter.Label>
      <Counter.Count max={42} />
      <Counter.Increment />
    </Counter>
  )
}

export default Usage;
