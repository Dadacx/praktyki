import { useRef, useState } from 'react';
import heart from "../images/heart.png"
import minionki from "../images/minionki.gif"

export const Game = (props) => {
  const inputRef = useRef(null);

  const [lvl, setLvl] = useState(1)
  const [hearts, setHearts] = useState(3)
  const [score, setScore] = useState(0)
  const [tab_index, setIndex] = useState(1)
  function survival() {
    if(inputRef.current.value == props.numbers[tab_index-1][1]) {
    if(tab_index>=props.numbers.length) {
      congratulations()
    } else {
      setIndex(tab_index+1)
      setLvl(lvl + 1)
    }
      document.querySelector("#hint").style.visibility = "hidden"
    } else if(inputRef.current.value != "") {
      setHearts(hearts - 1)
      //console.log(hearts)
      document.querySelector("#hint").innerHTML="Pokaż podpowiedź"
      document.querySelector("#hint").style.visibility = "visible"
      if(hearts==1) {
        document.querySelector("#lvl").style.display = "none"
        document.querySelector("#gameover").style.display = "block"
        document.querySelector("#game_content").style.display = "none"
        document.querySelector("#try_again").style.display = "block"
      }
    }
  }
  function free_game() {
    if(inputRef.current.value == props.numbers[tab_index-1][1]) {
      console.log(lvl)
      if(score==49) congratulations()
    if(tab_index>=props.numbers.length) {
      setIndex(1)
      setScore(score + 1)
      setLvl(lvl + 1)
    } else {
      console.log(lvl)
      setLvl(lvl + 1)
      setIndex(tab_index+1)
      setScore(score + 1)
    }
      document.querySelector("#hint").style.visibility = "hidden"
    } else if(inputRef.current.value != "") {
      if(score > 0) setScore(score - 1)
      document.querySelector("#hint").innerHTML="Pokaż podpowiedź"
      document.querySelector("#hint").style.visibility = "visible"
    }
  }
  function again() {
    setLvl(1)
    setHearts(3)
    setIndex(1)
    setScore(0)
    console.log(lvl)
    document.querySelector("#lvl").style.display = "block"
    document.querySelector("#gameover").style.display = "none"
    document.querySelector("#game_content").style.display = "flex"
    document.querySelector("#try_again").style.display = "none"
    document.querySelector("#win").style.display = "none"
    document.querySelector("#hearts").style.display = "block"
    document.querySelector("#hint").style.visibility = "hidden"
    if(props.mode2[0]==props.lang.free_game) document.querySelector("#score").style.display = "block"
  }
  function congratulations() {
    document.querySelector("#lvl").style.display = "none"
    document.querySelector("#game_content").style.display = "none"
    document.querySelector("#hearts").style.display = "none"
    document.querySelector("#win").style.display = "block"
    if(props.mode2[0]==props.lang.free_game) document.querySelector("#score").style.display = "none"
  }
  function handleClick() {
    if(props.mode2[0]==props.lang.survival) {
      survival()
    }
    if(props.mode2[0]==props.lang.free_game) {
      free_game()
    }
    inputRef.current.value = ""
  }
  return (
    <div className="mode_items">
      <div className="back shadow" style={{display:"none"}} onClick={props.back}>{props.lang.back}</div>
      <div className="selected_mode" style={{marginTop:"-120px"}} id='lvl'>{props.lang.level} {lvl}</div>
      <div className="selected_mode" id='gameover' style={{display:"none"}}>{props.lang.game_over}</div>
      <div className='btn try_again' id='try_again' onClick={again}>{props.lang.try_again}</div>
      <div id='win' className='win'>
        <div className='finished'>{props.lang.finished_lvl} {props.mode[0]} {props.lang.and} {props.mode[1]} {props.mode[2]}</div>
        <img className='minionki' src={minionki}></img>
        <br></br>
        <span className='back_to_mode' onClick={props.again}>{props.lang.select_mode}</span>
        <span className='play_again' onClick={again}>{props.lang.play_again}</span>
      </div>
      <div className='sercarazem' id='hearts'>
      {hearts==3 && props.mode2[0]==props.lang.survival ? <img src={heart} className='serca' alt='serca'></img> : null}
      {hearts>=2 && props.mode2[0]==props.lang.survival ? <img src={heart} className='serca' alt='serca'></img> : null}
      {hearts>=1 && props.mode2[0]==props.lang.survival ? <img src={heart} className='serca' alt='serca'></img> : null}
      </div>
      {props.mode2[0]==props.lang.free_game ? <div className='score' id='score'>twój wynik: {score}/50</div> : null}
      <div className="game_content" id='game_content'>
        <div className='dzialanie_box'>
        <div className="dzialanie">{props.numbers[tab_index-1][0]}</div>
        <div className="dzialanie" style={{margin: "0px 14px"}}>=</div>
        <input className="wynik" type="number" maxLength={3} ref={inputRef}></input>
        </div>
        <div className='hint shadow' id='hint' onClick={() => document.querySelector("#hint").innerHTML=`Poprawna odpowiedź to: ${props.numbers[tab_index-1][1]}`}>Pokaż podpowiedź</div>
        <div onClick={handleClick} className='btn'  style={{ fontSize: 42, marginTop: "10px" }}>{props.lang.check}</div>
      </div>
    </div>
  );
}