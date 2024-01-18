import board from "./images/board.png"
import './App.css';
import './font/font.css';
import { Menu } from "./components/Menu"
import { Mode } from "./components/Mode"
import { Mode2 } from "./components/Mode2"
import { Settings } from "./components/Settings"
var React = require('react')

function App() {
  const [screen, setScreen] = React.useState("home");
  return (
    <div className="content">
        <img className="board" alt="board" src={board}></img>
        { screen === "home" ?
      <Menu onClick={() => setScreen('otherScreen')}/>
      :  screen === "otherScreen" ?
      <Mode/>
      : null }
    </div>
  );
}

export default App;