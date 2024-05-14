import "bootstrap/dist/css/bootstrap.css";
import Button from "./Components/Button";
import Input from "./Components/Input";

function App() {
  return (
    <>
      <div className="card col-6 m-3">
        <Input />
        <div>
          <Button disabled>&nbsp;</Button>
          <Button disabled>&nbsp;</Button>
          <Button disabled>&nbsp;</Button>
          <Button>&divide;</Button>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>&times;</Button>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
          <Button disabled>&nbsp;</Button>
          <Button>0</Button>
          <Button disabled>&nbsp;</Button>
          <Button>=</Button>
        </div>
      </div>
    </>
  );
}

export default App;
