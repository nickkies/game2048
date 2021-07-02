import React from 'react';
import cn from 'classnames'

export default function Tile({ id, x, y, value, isMerged, isNew }) {
  return (
    <div className={cn(`tile tile-${value} tile-position-${x}-${y}`, {
      // ['tile-merged']: isMerged, // class 배열로도 사용 가능한듯?
      'tile-merged': isMerged, 
      'tile-new': isNew
      })}
    >
      <div className="tile-inner">{value}</div>
    </div>
  );
}
