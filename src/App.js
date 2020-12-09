import React from 'react';
import Main from './pages/Main';
import PegarPokemons from './stores/Pokes';
import './App.css';

function App() {
  return (
    <PegarPokemons>

      <div className="App">
        <Main />
      </div>
    </PegarPokemons>
  );
}

export default App;
