import React from 'react'
import './TimeDisplay.css'


function TimeDisplay({mainTimer, lapTimer}) {
  return (
    <div className="TimeDisplay f--column f--align-items-end">
      <div className="TimeDisplay__main">{mainTimer}</div>
      <div className="TimeDisplay__lap">
        <span className="TimeDisplay__prelap">Lap time: </span>
        {lapTimer}
      </div>
    </div>
  )
}


export default TimeDisplay