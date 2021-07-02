import React, { useEffect, useState } from 'react';
import times from 'lodash/times';
import { MAX_POS } from '../constant';
import { getInitialTileList, makeTile, moveTile } from '../util/tile';
import Tile from './Tile';
import { addKeyObserver, removeKeyObserver } from '../util/keyboard';
// import useMoveTile from '../hook/useMoveTile';

export default function Game({ setScore }) {
  const [tileList, setTileList] = useState(getInitialTileList);

  // up, down, left, right
  //useMoveTile({ tileList, setTileList, setScore });

  function moveAndAdd({ x, y }) {
    const newTileList = moveTile({ tileList, x, y })
    const score = newTileList.reduce(
      (acc, item) => item.isMerged ? acc + item.value : acc
      , 0
    );
    // 이전값에서 스코어를 더해준다
    setScore(v => v + score);
    const newTile = makeTile(newTileList);
    newTile.isNew = true;
    newTileList.push(newTile);
    setTileList(newTileList);
  }

  function moveUp(){
    moveAndAdd({x: 0, y: -1});
  }
  function moveDown(){
    moveAndAdd({x: 0, y: 1});
  }
  function moveLeft(){
    moveAndAdd({x: -1, y: 0});
  }
  function moveRight(){
    moveAndAdd({x: 1, y: 0});
  }
  
  // mount 이후 한 번 실행되고
  useEffect(() => {
    addKeyObserver('up',moveUp);
    addKeyObserver('down',moveDown);
    addKeyObserver('left',moveLeft); 
    addKeyObserver('right',moveRight); 
    // 리턴에 넣으면 unmount될 때 한 번 실행된다.
    return () => {
      removeKeyObserver('down',moveDown);
      removeKeyObserver('left',moveLeft); 
      removeKeyObserver('right',moveRight);
      removeKeyObserver('up',moveUp);
    }
  }/* 이부분 미작성!!*/)
  
  return (
    <>
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
      <div className="controller">
        <span onClick={moveLeft}>👈</span> 
        <span onClick={moveUp}>👆</span> 
        <span onClick={moveDown}>👇</span>
        <span onClick={moveRight}>👉</span> 
      </div>
    </>
  );
}