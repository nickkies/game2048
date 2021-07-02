import { useEffect } from "react";
import { addKeyObserver, removeKeyObserver } from "../util/keyboard";
import { makeTile, moveTile } from "../util/tile";

// UseEffect 
export default function useMoveTile({ tileList, setTileList, setScore }) {
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
};
