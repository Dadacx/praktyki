import pl_flag from "../images/pl_flag.png"
import {useState} from 'react';

export const Settings = () => {
    const [message, setMessage] = useState('');
  
    const handleChange = event => {
      setMessage(event.target.value);
  
      console.log('value is:', event.target.value);
    };
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
              <input className="volume settings_shadow" min={0} max={100} type="range" onChange={handleChange} value={message}></input>
              <span className="vol_value">{message}</span>
            </div>
          </div>
    )
  }