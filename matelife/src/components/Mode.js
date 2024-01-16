export const Mode = () => {
    return (
          <div className="mode_items">
            <div className="select_mode">wybierz tryb</div>
            <div className="boxes">
            <ModeBox text1="dodawanie" text2="odejmowanie" przedzial="1-25" margin="150px" rotate="rotate(6deg)"/>
            <ModeBox text1="mnożenie" text2="dzielenie" przedzial="1-25" margin="47px" rotate="rotate(-4deg)"/>
            <ModeBox text1="dodawanie" text2="odejmowanie" przedzial="1-100" margin="125px" rotate="rotate(6deg)"/>
            <ModeBox text1="mnożenie" text2="dzielenie" przedzial="1-100" margin="7px" rotate="rotate(-4deg)"/>
            </div>
          </div>
    );
  }
export const ModeBox = (props) => {
    return (
      <div className="mode_box" style={{marginTop:props.margin,transform:props.rotate}}>
        <div>{props.text1}</div>
        <div>{props.text2}</div>
        <div>{props.przedzial}</div>
      </div>
    )
}