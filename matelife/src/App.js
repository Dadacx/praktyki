import board from "./images/board.png"
import './App.css';
import './font/font.css';
import { Menu } from "./components/Menu"
import { Mode, mode } from "./components/Mode"
import { Mode2 } from "./components/Mode2"
import { Settings } from "./components/Settings"
var React = require('react')

function App() {
  const [screen, setScreen] = React.useState("menu");
  var component
  switch (screen) {
    case "menu":
      component = <Menu play={() => setScreen('mode')} settings={() => setScreen('settings')}/>
      break;
    case "mode":
      component = <Mode mode2={() => setScreen('mode2')}/>
      break;
    case "settings":
      component = <Settings />
      break;
    case "mode2":
      component = <Mode2 text1={mode[0]} text2={mode[1]} przedzial={mode[2]} />
      console.log(mode)
      break;
    default:
      break;
  }
  return (
    <div className="content">
        <img className="board" alt="board" src={board}></img>
        {component}
    </div>
  );
}

export default App;