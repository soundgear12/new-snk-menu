import React, { useEffect, useState, useContext } from 'react'
import './dialog.css';


const Dialog = ({description}) => {



  return (
    <div>
    <div className='snk__dialog section__padding'>
      <div className='snk__dialog-container'>
        <div className='snk__dialog-container_dialog-box'>
          <p>This is a fun game</p>
          <p>{description}</p>
        </div>
      </div>
      <div className='snk__dialog-container__footer'>
        <p>MODE SELECT</p>
      </div>
    </div>
    </div>
  )
}

export default Dialog;
