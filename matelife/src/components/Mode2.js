import { ModeBox } from "./Mode";

export const Mode2 = () => {
    return (
          <div className="mode_items">
            <div className="selected_mode">mnożenie i dzielenie<br></br>1-25</div>
            <div className="boxes">
            <ModeBox text1="survival" text2="" przedzial="" margin="85px" rotate="rotate(6deg)"/>
            <ModeBox text1="wolna" text2="rozgrywka" przedzial="" margin="25px" rotate="rotate(-4deg)"/>
            </div>
          </div>
    );
  }