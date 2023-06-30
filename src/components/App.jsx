import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function incrementor() {
    setCount(count + 1);
  }
  function decrementor() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrementor}>-</button>
      <button onClick={incrementor}>+</button>
    </div>
  );
}
export default App;
