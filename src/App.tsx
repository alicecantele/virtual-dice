import "./App.css";
import Footer from "./components/Footer";
import VirtualDice from "./components/VirtualDice";

function App() {
  return (
    <>
      <h1>Click the dice to roll!</h1>
      <VirtualDice />
      <Footer />
    </>
  );
}

export default App;
