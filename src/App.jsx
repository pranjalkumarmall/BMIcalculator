import { useState } from "react";
import {useMemo} from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState(70);
  const [weight, setWeight] = useState(180);
  function onWeightChange(event){
      setWeight(event.target.value)
  }
  function onHeightChange(event){
      setHeight(event.target.value)
  }
  const output= useMemo(()=>{
      const calculateHeight=height/100;
      return (weight/(calculateHeight*calculateHeight)).toFixed(1)
  },[weight,height]);
  return (
    <main>
      <h1>Project 1: BMI CALCULATOR</h1>
      <div className="input_section">
        <p className="slider_output">Weight:{weight}kg</p>
        <input
          className="input_slider"
          type="range"
          step="1"
          min="40"
          max="200"
          onChange={onWeightChange}
        ></input>
        <p className="slider_output">Height:{height}cm</p>
        <input className="input_slider" type="range" min='140' max='220' onChange={onHeightChange}></input>
      </div>
      <div className="output_section">
        <p>Your BMI is</p>
        <p className="output">{output}</p>
      </div>
    </main>
  );
}

export default App;