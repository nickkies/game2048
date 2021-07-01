import React from 'react';
import AboveGame from './component/AboveGame';
import Game from './component/Game';
import Header from './component/Header';

function App() {
  return (
    <div className="container">
      <Header />
      <AboveGame />
      <Game />
    </div>
  );
}

export default App;
