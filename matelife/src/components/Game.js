import { useRef, useState } from 'react';
import heart from "../images/heart.png"

export const Game = (props) => {
  const inputRef = useRef(null);

  const [lvl, next_lvl] = useState(1)
  var hearts = 3

  function handleClick() {
    if (inputRef.current.value == props.numbers[lvl-1][1]) {
      if(lvl>=props.numbers.length) {
        console.log("koniec")
      } else {
        console.log(lvl)
        next_lvl(lvl + 1)
      }
    }
  }
  return (
    <div className="mode_items">
      <div className="selected_mode">poziom {lvl}</div>
      {hearts==3 ? <img src={heart}></img> : null}
      {hearts>=2 ? <img src={heart}></img> : null}
      {hearts>=1 ? <img src={heart}></img> : null}
      <div className="game_content">
        <div className="dzialanie">{props.numbers[lvl-1][0]}</div>
        <input className="wynik" type="number" ref={inputRef}></input>
        <div onClick={handleClick}><button onClick={props.next}>sprawdź</button></div>
      </div>
    </div>
  );
}