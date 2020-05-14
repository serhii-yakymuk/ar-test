import React, { useState } from 'react';
import './App.css';
import AR from './AR';

function App() {
  const [isArEnabled, setArEnabled] = useState(false);
  return (
    <div className='App'>
      <button
        className='App-button'
        onClick={() => setArEnabled(prevIsArEnabled => !prevIsArEnabled)}
      >
        {isArEnabled ? 'Disable' : 'Enable'} AR
      </button>
      {isArEnabled &&
        <AR />
      }
    </div>
  );
}

export default App;
