import { useState } from "react";
import generateRandom from "../utils/generateNumber";

function RandomNumber({ maxNum }) {
  console.log("render");
  const [randomNum, setRandomNum] = useState(generateRandom(maxNum));

  const changeRandomNum = () => {
    setRandomNum(generateRandom(maxNum));
  };

  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={changeRandomNum}>Generate new random button</button>
    </div>
  );
}

export default RandomNumber;
