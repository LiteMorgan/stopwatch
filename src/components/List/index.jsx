import React                from 'react'
import TimeFormatter        from 'minutes-seconds-milliseconds'

import './List.css'


function List({data}) {
  return (
    <ol className="List f--column-reverse">
      {data.map((lap, key) => {
        return (
          <li 
            key={lap}
            className="f--justify-space-between"
          >
            <span className="List__number">Lap {key + 1}</span>
            <span className="List__time">{TimeFormatter(lap)}</span>
          </li>
        )
      })}
    </ol>
  )
}


export default List