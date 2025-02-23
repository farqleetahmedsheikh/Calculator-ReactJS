/** @format */
import { useState } from "react";
import "./App.css";
import Screen from "./components/Screen";
import Buttons from "./components/Button";

function App() {
  let [display, setDisplay] = useState("");
  const onButtonClick = (button) => {
    if (button === "AC" || button === "C") {
      setDisplay("");
    } else if (button === "=") {
      setDisplay(eval(display));
    } else {
      setDisplay(display + button);
    }
  };

  return (
    <div className="calculator">
      <Screen displayValue={display} />
      <Buttons onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
