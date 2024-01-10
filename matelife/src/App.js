import board from "./images/board.png"
import matelife from "./images/matelife.png"
import './App.css';
import './font/font.css';

function App() {
  return (
    <div className="content">
        <img className="board" alt="board" src={board}></img>
        <div className="menu_items">
          <img className="matelife" alt="matelife_logo" src={matelife}></img>
          <div className="play btn underline-animation">graj</div>
          <div className="skins btn underline-animation">skórki</div>
          <div className="settings btn underline-animation">ustawienia</div>
    </div>
  {/*<div className="menu">
    <img className="matelife" alt="matelife_logo" src={matelife}></img>
    <div className="play btn">Graj</div>
</div>*/}
    </div>
  );
}

export default App;
