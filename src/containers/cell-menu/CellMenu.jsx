import React from 'react'
import './cell-menu.css';
import Cell from '../../components/cell/Cell';

const cellDataRow1 = [
  {
    index: 0,
    text: 'ARACDE MODE',
  },
  {
    index: 1,
    text: 'SURVIVAL MODE',
    style: 'snk__cell-menu-contents_firstRow'
  },
  {
    index: 2,
    text: 'VS MODE',
    style: 'snk__cell-menu-contents_firstRow'
  },
];

const cellDataRow2 = [
  {
    index: 3,
    text: 'TRAINING MODE',
    style: 'snk__cell-menu-contents_secondRow'
  },
  {
    index: 4,
    text: 'LOGO',
    style: 'snk__cell-menu-contents_secondRow'
  },
  {
    index: 5,
    text: 'REPLAY MODE',
    style: 'snk__cell-menu-contents_secondRow'
  },
];

const cellDataRow3 = [
  {
    index: 6,
    text: 'REPLAY MODE',
    style: 'snk__cell-menu-contents_secondRow'
  },
  {
    index: 7,
    text: 'OPTION MODE',
    style: 'snk__cell-menu-contents_firstRow'
  },
  {
    index: 8,
    text: 'OTHER LOGO',
    style: 'snk__cell-menu-contents_firstRow'
  },
];


const CellMenu = () => {
  return (
    <div className='snk__cell-menu section__padding'>
      <div className='snk__cell-menu-contents_firstRow'>
        {cellDataRow1.map((item, index) => (
          <Cell text={item.text} key={index} />
        ))}
      </div>

      <div className='snk__cell-menu-contents_secondRow'>
        {cellDataRow2.map((item, index) => (
          <Cell text={item.text} key={index} />
        ))}
      </div>

      <div className='snk__cell-menu-contents_thirdRow'>
        {cellDataRow3.map((item, index) => (
          <Cell text={item.text} key={index} />
        ))}
      </div>
    </div>
  )
}

export default CellMenu;
