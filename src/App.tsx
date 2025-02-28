import "./App.css";
import Footer from "./components/Footer";
import VirtualDice from "./components/VirtualDice";

function App() {
  return (
    <>
      <h1>Click on the dice to roll it!</h1>
      <VirtualDice />
      <Footer />
    </>
  );
}

export default App;
