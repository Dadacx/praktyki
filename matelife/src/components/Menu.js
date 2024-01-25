import matelife from "../images/matelife.png"

export const Menu = (props) => {
    return (
          <div className="menu_items">
            <img className="matelife" alt="matelife_logo" src={matelife}></img>
            <div className="play btn underline-animation" onClick={props.play}>{props.lang.play}</div>
            <div className="skins btn underline-animation">{props.lang.skins}</div>
            <div className="settings btn underline-animation" onClick={props.settings}>{props.lang.settings}</div>
          </div>
    );
  }