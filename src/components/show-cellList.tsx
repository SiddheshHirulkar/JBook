import React from 'react';
import CellList from './cell-list';

const ShowCellList: React.FC = () => {
  return (
    <div className="display-flex">
      <div className="cell-container"><CellList /></div>
    </div>
  );
}

export default ShowCellList;
