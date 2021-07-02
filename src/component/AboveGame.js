import React from 'react';

export default function AboveGame() {
  return (
    <div className="above-game">
      <p className="game-intro">
        Press 👆 || 👉 || 👈 || 👇 keyboard button
      </p>
      <a href="/" className="restart-button">
        New Game
      </a>
    </div>
  );
}