import React from 'react';
import { Header, CellMenu, Dialog } from './containers';
import './App.css';

const App = () => (
  <div className='App'>
    <div className='gradient__bg'>
      <div>
        <Header />
      </div>
      <CellMenu />
      <Dialog />
    </div>
  </div>
);

export default App;
