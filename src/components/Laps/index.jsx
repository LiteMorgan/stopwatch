import React                from 'react'
import TimeFormatter        from 'minutes-seconds-milliseconds'

import './Laps.css'


function Laps({data}) {
  return (
    <ol className="list">
      {data.map((lap, key) => {
        return (
          <li 
            key={lap}
            className="f--justify-space-between"
          >
            <span className="list__number">Lap {key + 1}</span>
            <span className="list__time">{TimeFormatter(lap)}</span>
          </li>
        )
      })}
    </ol>
  )
}


export default Laps