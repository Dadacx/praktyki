import { useRef, useState } from 'react';
import heart from "../images/heart.png"
import minionki from "../images/minionki.gif"

var cancel = null
const stats = JSON.parse(localStorage.getItem('stats'))
export const Game = (props) => {
  const inputRef = useRef(null);

  const [lvl, setLvl] = useState(1)
  const [hearts, setHearts] = useState(3)
  const [score, setScore] = useState(0)
  const [tab_index, setIndex] = useState(1)
  stats.time = stats.time != null ? stats.time : stats.time = 0
  function incrementSeconds() {
    stats.time += 1
    console.log(stats.time)
  }
  if(cancel == null) {
    cancel = setInterval(incrementSeconds, 1000);
    console.log("fdsvs")
  }
  function stats_correct_answer() {
    stats.correct_answers = stats.correct_answers != null ? stats.correct_answers + 1 : 1
    console.log(stats)
    localStorage.setItem('stats', JSON.stringify(stats))
  }
  function stats_incorrect_answer() {
    stats.incorrect_answers = stats.incorrect_answers != null ? stats.incorrect_answers + 1 : 1
    console.log(stats)
    localStorage.setItem('stats', JSON.stringify(stats))
  }
  function survival() {
    if(inputRef.current.value == props.numbers[tab_index-1][1]) {
    if(tab_index>=props.numbers.length) {
      congratulations()
    } else {
      setIndex(tab_index+1)
      setLvl(lvl + 1)
      stats_correct_answer()
    }
      document.querySelector("#hint").style.visibility = "hidden"
    } else if(inputRef.current.value != "") {
      if(hearts==1) {
        stats.games_lost = stats.games_lost != null ? stats.games_lost + 1 : 1
        console.log(stats)
        localStorage.setItem('stats', JSON.stringify(stats))
        clearInterval(cancel)
        cancel = null
        console.log(cancel)
        document.querySelector("#lvl").style.display = "none"
        document.querySelector("#gameover").style.display = "block"
        document.querySelector("#game_content").style.display = "none"
        document.querySelector("#again").style.display = "block"
        document.querySelector("#hearts").style.display = "none"
      } else {
      setHearts(hearts - 1)
      stats_incorrect_answer()
      //console.log(hearts)
      document.querySelector("#hint").innerHTML="Pokaż podpowiedź"
      document.querySelector("#hint").style.visibility = "visible"
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
      stats_correct_answer()
    } else {
      console.log(lvl)
      setLvl(lvl + 1)
      setIndex(tab_index+1)
      setScore(score + 1)
      stats_correct_answer()
    }
      document.querySelector("#hint").style.visibility = "hidden"
    } else if(inputRef.current.value != "") {
      if(score > 0) setScore(score - 1)
      stats_incorrect_answer()
      document.querySelector("#hint").innerHTML="Pokaż podpowiedź"
      document.querySelector("#hint").style.visibility = "visible"
    }
  }
  function again() {
    cancel = setInterval(incrementSeconds, 1000);
    stats.games_playes = stats.games_playes != null ? stats.games_playes + 1 : 1
    console.log(stats)
    localStorage.setItem('stats', JSON.stringify(stats))
    setLvl(1)
    setHearts(3)
    setIndex(1)
    setScore(0)
    console.log(lvl)
    document.querySelector("#lvl").style.display = "block"
    document.querySelector("#gameover").style.display = "none"
    document.querySelector("#game_content").style.display = "flex"
    document.querySelector("#again").style.display = "none"
    document.querySelector("#win").style.display = "none"
    document.querySelector("#hearts").style.display = "block"
    document.querySelector("#hint").style.visibility = "hidden"
    if(props.mode2[0]==props.lang.free_game) document.querySelector("#score").style.display = "block"
  }
  function congratulations() {
    localStorage.setItem('stats', JSON.stringify(stats))
    clearInterval(cancel)
    cancel = null
    console.log(stats)
    stats.games_won = stats.games_won != null ? stats.games_won + 1 : 1
    console.log(stats)
    localStorage.setItem('stats', JSON.stringify(stats))
    stats_correct_answer()
    document.querySelector("#lvl").style.display = "none"
    document.querySelector("#game_content").style.display = "none"
    document.querySelector("#hearts").style.display = "none"
    document.querySelector("#win").style.display = "block"
    if(props.mode2[0]==props.lang.free_game) document.querySelector("#score").style.display = "none"
  }
  function handleClick(event) {
    if(props.mode2[0]==props.lang.survival) {
      survival()
    }
    if(props.mode2[0]==props.lang.free_game) {
      free_game()
    }
    inputRef.current.value = ""
    if(event != undefined) event.preventDefault()
  }
  return (
    <div className="mode_items">
      <div className="back shadow" style={{display:"none"}} onClick={props.back}>{props.lang.back}</div>
      <div className="selected_mode" style={{marginTop:"-120px"}} id='lvl'>{props.lang.level} {lvl}</div>
      <div className="selected_mode" id='gameover' style={{display:"none"}}>{props.lang.game_over}</div>
      <div id='again' style={{display:"none"}}>
      <div className='btn try_again' id='try_again' onClick={again}>{props.lang.try_again}</div>
      <div className='btn try_again' style={{marginTop: "25px"}} onClick={props.again}>{props.lang.select_mode}</div>
      </div>
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
        <form onSubmit={(event) => handleClick(event)}>
          <input className="wynik" type="number" ref={inputRef}></input>
        </form>
        </div>
        <div className='hint shadow' id='hint' onClick={() => document.querySelector("#hint").innerHTML=`Poprawna odpowiedź to: ${props.numbers[tab_index-1][1]}`}>Pokaż podpowiedź</div>
        <div onClick={() => console.log(handleClick())} className='btn'  style={{ fontSize: 42, marginTop: "10px" }}>{props.lang.check}</div>
      </div>
    </div>
  );
}