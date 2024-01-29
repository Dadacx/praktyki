import './App.css';
import './font/font.css';
import { Menu } from "./components/Menu"
import { Mode, mode } from "./components/Mode"
import { Mode2, mode2 } from "./components/Mode2"
import { Settings } from "./components/Settings"
import { Game } from "./components/Game"
import { Stats } from "./components/Stats"
import board from "./images/board.png"
import levels from "./levels/levels.json"
import langs from "./languages/lang.json"
import sound from "./music.mp3"
var React = require('react')

function game(mode,lang) {
  if (mode[0] === lang.addition && mode[2] === "1-25") {
    return levels.dodawanie_odejmowanie_25
  }
  if (mode[0] === lang.multiplication && mode[2] === "1-25") {
    return levels.mnozenie_dzielenie_25
  }
  if (mode[0] === lang.addition && mode[2] === "1-100") {
    return levels.dodawanie_odejmowanie_100
  }
  if (mode[0] === lang.multiplication && mode[2] === "1-100") {
    return levels.mnozenie_dzielenie_100
  }
}
function toggleSound(event) {
  if(event.target.checked) {
    document.querySelector("audio").play()
    document.querySelector('audio').volume = 0.1
  } else {
    document.querySelector("audio").pause()
  }
}
var lang_index = localStorage.getItem('lang') != null ? JSON.parse(localStorage.getItem('lang')).lang_index : 0
function App() {
  //localStorage.clear("stats")
  if(localStorage.getItem('stats') == null) {
    var data = {
      games_playes:0,
      games_won:0,
      games_lost:0
    }
    localStorage.setItem('stats', JSON.stringify({}))
  }
  const [screen, setScreen] = React.useState("menu");
  const [lang, setLang] = React.useState(localStorage.getItem('lang') != null ? JSON.parse(localStorage.getItem('lang')).lang : "pl-pl");
  function changeLang() {
    const langs = ["pl-pl","en-gb"]
    lang_index++
    if(lang_index>=langs.length) lang_index = 0
    setLang(langs[lang_index])
    localStorage.setItem('lang', JSON.stringify({lang:langs[lang_index],lang_index:lang_index}))
  }
  var component
  switch (screen) {
    case "menu":
      component = <Menu play={() => setScreen('mode')} settings={() => setScreen('settings')} stats={() => setScreen('stats')} lang={langs[lang]} />
      break;
    case "mode":
      component = <Mode mode2={() => setScreen('mode2')} lang={langs[lang]} back={() => setScreen('menu')}/>
      break;
    case "settings":
      component = <Settings lang={langs[lang]} setLang={changeLang} toggleSound={toggleSound} back={() => setScreen('menu')}/>
      break;
    case "mode2":
      component = <Mode2 text1={mode[0]} text2={mode[1]} przedzial={mode[2]} game={() => setScreen('game')} lang={langs[lang]} back={() => setScreen('mode')}/>
      console.log(mode)
      break;
    case "game":
      component = <Game numbers={game(mode,langs[lang])} again={() => setScreen('mode')} mode2={mode2} mode={mode} lang={langs[lang]} back={() => setScreen('mode2')}/>
      console.log(mode2)
      console.log(game(mode,langs[lang]))
      break;
    case "stats":
      component = <Stats lang={langs[lang]} back={() => setScreen('menu')}/>
      console.log(mode2)
      console.log(game(mode,langs[lang]))
      break;
    default:
      break;
  }
  return (
    <div className="content">
        <img className="board" alt="board" src={board}></img>
        {component}
        <audio loop>
        <source src={sound} type="audio/mpeg"></source>
  </audio>
    </div>
  );
}

export default App;