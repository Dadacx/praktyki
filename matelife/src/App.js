import board from "./images/board.png"
import './App.css';
import './font/font.css';
import { Menu } from "./components/Menu"
import { Mode } from "./components/Mode"
import { Mode2 } from "./components/Mode2"
import { Settings } from "./components/Settings"

function App() {
  return (
    <div className="content">
        <img className="board" alt="board" src={board}></img>
        <Mode2 />
    </div>
  );
}

export default App;