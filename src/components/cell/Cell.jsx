import React, { useState, useContext } from 'react'
import { Dialog } from '../../containers';
import './cell.css';


const Cell = ({ text, imgUrl, description }) => {



  return (
    <>
      <div className='snk__cell'>
        <div className='snk__cell-text'>
          <h1>{text}</h1>
        </div>
        <img src={imgUrl} />
      </div>

    </>
  )
}

export default Cell;
