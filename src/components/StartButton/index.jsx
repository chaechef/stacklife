import React, {useState} from 'react';
import './styles.css';

const StartBtn = () => {

  const [isToggleOn, setisToggleOn] = useState(false);

  return (
      <div className="start">
            <button className="StartBtn" type="button" onClick={() => setisToggleOn(!isToggleOn)}>
               {isToggleOn ? "true" : "false"}
            </button>
      </div>
  );
}

export default StartBtn;