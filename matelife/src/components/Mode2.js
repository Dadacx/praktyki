export const Mode2 = (props) => {
  return (
    <div className="mode_items">
      <div className="selected_mode">{props.text1} i {props.text2}<br></br>{props.przedzial}</div>
      <div className="boxes">
        <ModeBox2 text1="survival" text2="" przedzial="" margin="85px" rotate="rotate(6deg)" desc="gracz posiada 3 życia. każda pomyłka kosztuje jedno życie. gra się kończy gdy gracz posiada 0 żyć." />
        <ModeBox2 text1="wolna" text2="rozgrywka" przedzial="" margin="25px" rotate="rotate(-4deg)" desc="gra do 50 punktów." />
      </div>
    </div>
  );
}

export const ModeBox2 = (props) => {
  return (
    <div className="mode_box tooltip" style={{ marginTop: props.margin, transform: props.rotate }}>
      <div>{props.text1}</div>
      <div>{props.text2}</div>
      <div>{props.przedzial}</div>
      <span className="tooltiptext">{props.desc}</span>
    </div>
  )
}