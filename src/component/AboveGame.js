import React from 'react';

export default function AboveGame() {
  return (
    <div className="above-game">
      <p className="game-intro">
        Press 👆 || 👉 || 👈 || 👇 button
      </p>
      <a href="/game2048" className="restart-button">
        New Game
      </a>
    </div>
  );
}