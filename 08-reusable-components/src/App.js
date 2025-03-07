import "./App.css";
import MyComponent from "./components/MyComponent";
import OrderComponent from "./components/OrderComponent";

function App() {
  return (
    <div className="App">
      <MyComponent />
      <OrderComponent />
      <MyComponent />
      <OrderComponent />
      <MyComponent />
    </div>
  );
}

export default App;
