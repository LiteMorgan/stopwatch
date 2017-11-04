import React from 'react';
import './Stopwatch.css';


function Stopwatch({mainTimer, lapTimer}) {
  return (
    <div className="Stopwatch__clocks">
      <div className="Stopwatch__main">{mainTimer}</div>
      <div className="Stopwatch__lap">
        <span className="Stopwatch__prelap">Lap time: </span>
        {lapTimer}
      </div>
    </div>
  )
};


export default Stopwatch;