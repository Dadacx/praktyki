export const Settings = (props) => {
  return (
    <div className="settings_items">
      <div className="back shadow" onClick={props.back}>{props.lang.back}</div>
      <div className="ustawienia">{props.lang.settings}</div>
      <div className="language settings_item">
        <span>{props.lang.language}</span>
        <img onClick={props.setLang} className="flag settings_shadow" alt="flaga" src={require(`../images/${props.lang.lang}.png`)}></img>
      </div>
      {/*<div className="font settings_item">
        <span>{props.lang.font}</span>
        <div className="font_box settings_shadow">
          <span>średnia</span>
        </div>
  </div>*/}
      <div className="sound settings_item">
        <span>{props.lang.music}</span>
        <label class="toggler-wrapper settings_shadow">
          <input type="checkbox" onClick={props.toggleSound}></input>
          <div class="toggler-slider">
            <div class="toggler-knob"></div>
          </div>
        </label>
      </div>
    </div>
  )
}