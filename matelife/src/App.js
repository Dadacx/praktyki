import board from "./images/board.png"
import './App.css';
import './font/font.css';
import { Menu } from "./components/Menu"
import { Mode, mode } from "./components/Mode"
import { Mode2, mode2 } from "./components/Mode2"
import { Settings } from "./components/Settings"
import { Game } from "./components/Game"
import levels from "./levels/levels.json"
var React = require('react')

function game(mode) {
  if(mode[0]=="dodawanie" && mode[2]=="1-25") {
    return levels.dodawanie_odejmowanie_25
  }
  if(mode[0]=="mnożenie" && mode[2]=="1-25") {
    return levels.mnozenie_dzielenie_25
  }
}
function App() {
  const [screen, setScreen] = React.useState("menu");
  function test() {
    return () => setScreen('game')
  }
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
      component = <Mode2 text1={mode[0]} text2={mode[1]} przedzial={mode[2]} game={() => setScreen('game')}/>
      console.log(mode)
      break;
    case "game":
      component = <Game numbers={game(mode)} mode2={mode2}/>
      console.log(mode)
      console.log(game(mode))
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