export const Mode2 = (props) => {
  return (
    <div className="mode_items">
      <div className="back shadow" onClick={props.back}>{props.lang.back}</div>
      <div className="selected_mode">{props.text1} {props.lang.and} {props.text2}<br></br>{props.przedzial}</div>
      <div className="boxes">
        <ModeBox2 text1={props.lang.survival} text2="" przedzial="" margin="85px" rotate="rotate(6deg)" desc={props.lang.survival_desc} game={props.game}/>
        <ModeBox2 text1={props.lang.free_game} text2="" przedzial="" margin="25px" rotate="rotate(-4deg)" desc={props.lang.free_game_desc} game={props.game}/>
      </div>
    </div>
  );
}
export const ModeBox2 = (props) => {
  return (
    <div onClick={() => mode_type2(props.text1, props.text2, props.przedzial)} style={{ marginTop: props.margin, transform: props.rotate }}>
      <div onClick={props.game} className="mode_box tooltip">
        <div style={{textAlign:"center"}}>{props.text1}</div>
        <div>{props.text2}</div>
        <div>{props.przedzial}</div>
        <span className="tooltiptext">{props.desc}</span>
      </div>
    </div>
  )
}
export const mode_type2 = (text1, text2, przedział) => {
  mode2 = [text1, text2, przedział]
}
export var mode2 = ["", ""]