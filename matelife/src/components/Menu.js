import matelife from "../images/matelife.png"

export const Menu = () => {
    return (
          <div className="menu_items">
            <img className="matelife" alt="matelife_logo" src={matelife}></img>
            <div className="play btn underline-animation">graj</div>
            <div className="skins btn underline-animation">skórki</div>
            <div className="settings btn underline-animation">ustawienia</div>
          </div>
    );
  }