import React from 'react';
import { Header, CellMenu, Dialog } from './containers';
import './App.css';
import ModeSelect from './components/mode-select/ModeSelect';

export const SnkContext = React.createContext();

const App = () => (
  <div className='App'>
    <div className='gradient__bg'>
      <div>
        <Header />
      </div>
      <CellMenu />
      <ModeSelect />
    </div>
  </div>
);

export default App;
