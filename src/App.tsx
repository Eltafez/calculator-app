import "bootstrap/dist/css/bootstrap.css";
import Button from "./Components/Button";
import Input from "./Components/Input";
import { useState } from "react";

function App() {
  const [textInput, setTextInput] = useState("");

  const updateScreen = (newState: string) => {
    setTextInput(textInput + newState);
  };

  const updateEquation = () => {
    const equation = eval(textInput);
    setTextInput(equation);
  };

  return (
    <>
      <div className="card col-6 m-3">
        <Input text={textInput} />
        <div>
          <Button disabled>&nbsp;</Button>
          <Button disabled>&nbsp;</Button>
          <Button disabled>&nbsp;</Button>
          <Button onClickedButton={updateScreen}>/</Button>
          <Button onClickedButton={updateScreen}>7</Button>
          <Button onClickedButton={updateScreen}>8</Button>
          <Button onClickedButton={updateScreen}>9</Button>
          <Button onClickedButton={updateScreen}>*</Button>
          <Button onClickedButton={updateScreen}>4</Button>
          <Button onClickedButton={updateScreen}>5</Button>
          <Button onClickedButton={updateScreen}>6</Button>
          <Button onClickedButton={updateScreen}>-</Button>
          <Button onClickedButton={updateScreen}>1</Button>
          <Button onClickedButton={updateScreen}>2</Button>
          <Button onClickedButton={updateScreen}>3</Button>
          <Button onClickedButton={updateScreen}>+</Button>
          <Button disabled>&nbsp;</Button>
          <Button onClickedButton={updateScreen}>0</Button>
          <Button disabled>&nbsp;</Button>
          <Button onClickedButton={updateEquation}>=</Button>
        </div>
      </div>
    </>
  );
}

export default App;
