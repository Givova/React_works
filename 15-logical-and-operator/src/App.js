import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";
import Reset from "./components/Reset";

function App() {
  console.log("App render");
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const buttonStyle = { backgroundColor: "lightgreen" };

  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Reset count={count} resetCount={resetCount} buttonStyle={buttonStyle} />
    </div>
  );
}

export default App;
