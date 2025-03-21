import "./App.css";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="App">
      <Wrapper color="lightblue">
        <h2>Text inside of the Wrapper </h2>
        <button>Click me</button>
      </Wrapper>
      <Wrapper color="lightgreen">
        <h2>Another text </h2>
        <input type="text" placeholder="Enter value"></input>
      </Wrapper>
      <Wrapper color="lightyellow">
        <p>How are you?</p>
        <p>My friend</p>
      </Wrapper>
    </div>
  );
}

export default App;
