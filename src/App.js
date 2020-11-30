import React from 'react';

import Pokes from './contexts/Pokes';
import Main from './pages/Main';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Pokes>
      <div className="App">
        <Header />
        <Main />
      </div>
    </Pokes>
  );
}

export default App;
