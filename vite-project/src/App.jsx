import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  // let counter = 5;
  const addValue = () => {
    counter = counter + 1
   setCounter(counter)
  }; 
  const decreasValue = () => {
    // counter = counter + 1
   setCounter(counter-1)
  };
  return (
    <>
      <h1>react hooks revise day 1</h1>
      <h1>counter value: {counter}</h1>
      <button onClick={addValue}>add value {addValue}</button> <br></br>
      <button onClick={decreasValue}>decrease value {addValue}</button>
    </>
  );
}

export default App;
