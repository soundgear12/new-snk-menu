import React, { createContext, useState } from 'react'
import './cell-menu.css';
import Cell from '../../components/cell/Cell';
import Dialog from '../dialog/Dialog';

const cellDataRow1 = [
  {
    index: 0,
    text: 'ARACDE MODE',
    description: 'Play a perfect conversion of the arcade game here',
  },
  {
    index: 1,
    text: 'SURVIVAL MODE',
    description: 'Play survival mode',
  },
  {
    index: 2,
    text: 'VS MODE',
    description: '',
  },
];

const cellDataRow2 = [
  {
    index: 3,
    text: 'TRAINING MODE',
    description: '',
  },
  {
    index: 4,
    text: '',
    description: '',
    imgUrl: '../../images/pepe.jfif',
  },
  {
    index: 5,
    text: 'REPLAY MODE',
    description: '',
  },
];

const cellDataRow3 = [
  {
    index: 6,
    text: 'REPLAY MODE',
    description: '',
  },
  {
    index: 7,
    text: 'OPTION MODE',
    description: '',
  },
  {
    index: 8,
    text: 'OTHER LOGO',
    description: '',
  },
];


const CellMenu = (props) => {
  const [desc, setDesc] = useState("");


  return (
    <>
      <div className='snk__cell-menu section__padding'>
        <div className='snk__cell-menu-contents_firstRow'>
          {cellDataRow1.map((item, index) => (
            <Cell text={item.text} key={index} description={item.description} />
          ))}
        </div>

        <div className='snk__cell-menu-contents_secondRow'>
          {cellDataRow2.map((item, index) => (
            <Cell text={item.text} key={index} imgUrl={item.imgUrl} />
          ))}
        </div>

        <div className='snk__cell-menu-contents_thirdRow'>
          {cellDataRow3.map((item, index) => (
            <Cell text={item.text} key={index} imgUrl={item.imgUrl} />
          ))}
        </div>
      </div>
      <Dialog />
    </>
  )
}

export default CellMenu;
