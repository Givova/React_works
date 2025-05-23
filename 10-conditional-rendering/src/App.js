import "./App.css";
import PetInfo from "./components/PetInfo";

function App() {
  return (
    <div className="App">
      <PetInfo animal="dog" age={4} hasPet={true} />
      <PetInfo animal="cat" age={7} hasPet={false} />
    </div>
  );
}

export default App;
