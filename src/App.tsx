import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import VirtualDice from "./VirtualDice/VirtualDice";

function App() {
  return (
    <>
      <div>
        <h1>Click the dice to roll!</h1>
        <div>
          <VirtualDice />
        </div>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
