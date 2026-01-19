import { useState } from "react";
import "./Counter.css";
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="counter-section">
      <p>Current Count: {count}</p>
      <div className="button-section">
        <button onClick={handleIncrement} className="increment-button">
          Increment
        </button>
        <button onClick={handleDecrement} className="decrement-button">
          Decrement
        </button>
        <button className="reset-button" onClick={() => setCount(0)}>
          Reset
        </button>
        <button
          className="half-button"
          onClick={() => {
            setCount(count / 2);
          }}
        >
          Half
        </button>
      </div>
    </div>
  );
}
export default Counter;
