import React, { useState } from 'react';
import times from 'lodash/times';
import { MAX_POS } from '../constant';
import { getInitialTileList } from '../util/tile';
import useMoveTile from '../hook/useMoveTile';
import Tile from './Tile';

export default function Game() {
  const [tileList, setTileList] = useState(getInitialTileList);
  // up, down, left, right
  useMoveTile({ tileList, setTileList });
  return (
    <div className="game-container">
      <div className="grid-container">
        {times(MAX_POS, i => (
          <div key={i} className="grid-row">
            {times(MAX_POS, j => (
              <div key={j} className="grid-cell"></div>
            ))}
          </div>
        ))}
      </div>

      <div className="tile-container">
        {tileList.map(tile => (
         <Tile key={tile.id} {...tile} />
        
        ))}
      </div>
    </div>
  );
}