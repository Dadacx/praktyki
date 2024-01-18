import matelife from "../images/matelife.png"

export const Menu = (props) => {
    return (
          <div className="menu_items">
            <img className="matelife" alt="matelife_logo" src={matelife}></img>
            <div className="play btn underline-animation" onClick={props.play}>graj</div>
            <div className="skins btn underline-animation">skórki</div>
            <div className="settings btn underline-animation" onClick={props.settings}>ustawienia</div>
          </div>
    );
  }