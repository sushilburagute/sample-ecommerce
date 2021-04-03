import { useState } from "react";
import "./App.css";
import { Header, Hero, ViewControls, FoodMenu } from "./components";

function App() {
  const [route, setRoute] = useState("foodmenu");
  console.log(<Header />);
  return (
    <div className="App">
      <Header />
      <Hero />
      <ViewControls />
      {route === "foodmenu" && <FoodMenu />}
      {route === "cart" && <h1>Cart</h1>}
    </div>
  );
}

export default App;
