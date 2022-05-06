import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [stopCounter, setStopCounter] = useState(null);
  const increment = () => {
    return setTimeout(() => setCounter((prev) => prev + 1), 1000);
  };

  const startCounter = () => {
    clearTimeout(stopCounter);
    setStopCounter();
    increment();
  };
  useEffect(() => {
    clearTimeout(stopCounter);
    setStopCounter(increment());
  }, [counter]);

  return (
    <div className="App">
      <h1>Infinite counter :{counter}</h1>
      <button
        onClick={() => {
          startCounter();
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          clearTimeout(stopCounter);
        }}
      >
        Stop
      </button>
    </div>
  );
}
