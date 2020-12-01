import React from 'react';

import Pokes from './stores/Pokes';
import Main from './pages/Main';
import './App.css';

function App() {
  return (
    <Pokes>
      <div className="App">
        <Main />
      </div>
    </Pokes>
  );
}

export default App;
