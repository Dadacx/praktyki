import board from "./images/board.png"
import matelife from "./images/matelife.png"
import './App.css';
import './font/font.css';

function App() {
  return (
    <div className="content">
        <img className="board" alt="board" src={board}></img>
        <Mode />
    </div>
  );
}
const Menu = () => {
  return (
        <div className="menu_items">
          <img className="matelife" alt="matelife_logo" src={matelife}></img>
          <div className="play btn underline-animation">graj</div>
          <div className="skins btn underline-animation">skórki</div>
          <div className="settings btn underline-animation">ustawienia</div>
        </div>
  );
}
const Mode = () => {
  return (
        <div className="mode_items">
          <div className="select_mode">wybierz tryb</div>
          <div className="boxes">
          <ModeBox text1="dodawanie" text2="odejmowanie" przedzial="1-25" margin="150px" />
          <ModeBox text1="mnożenie" text2="dzielenie" przedzial="1-25" margin="47px" />
          <ModeBox text1="dodawanie" text2="odejmowanie" przedzial="1-100" margin="125px" />
          <ModeBox text1="mnożenie" text2="dzielenie" przedzial="1-100" margin="7px" />
          </div>
        </div>
  );
}
const ModeBox = (props) => {
  return (
    <div className="mode_box" style={{marginTop:props.margin}}>
      <div>{props.text1}</div>
      <div>{props.text2}</div>
      <div>{props.przedzial}</div>
    </div>
  )
}

export default App;
