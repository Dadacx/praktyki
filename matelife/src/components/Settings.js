import pl_flag from "../images/pl_flag.png"
import { useState } from 'react';

export const Settings = () => {
  return (
    <div className="settings_items">
      <div className="ustawienia">ustawienia</div>
      <div className="language settings_item">
        <span>język</span>
        <img className="flag settings_shadow" alt="flaga" src={pl_flag}></img>
      </div>
      <div className="font settings_item">
        <span>czcionka</span>
        <div className="font_box settings_shadow">
          <span>średnia</span>
        </div>
      </div>
      <div className="sound settings_item">
        <span>dźwięk</span>
        <label class="toggler-wrapper settings_shadow">
          <input type="checkbox" ></input>
          <div class="toggler-slider">
            <div class="toggler-knob"></div>
          </div>
        </label>
      </div>
    </div>
  )
}