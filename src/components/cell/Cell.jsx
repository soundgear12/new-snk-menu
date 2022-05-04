import React from 'react'
import './cell.css';

const Cell = ({text}) => {
  return (
    <div className='snk__cell'>
      <div className='snk__cell-text'>
        <h1>{text}</h1>
      </div>
    </div>
  )
}

export default Cell;
