import './cell-list.css';
import React, { Fragment } from 'react'
import { useTypedSelector } from '../hooks/use-typed-selector';
import CellListItem from './cell-list-item';
import AddCell from './add-cell';

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) => {
    return order.map((id) => {
      return data[id];
    });
  });

  const renderCells = cells.map((cell) => <Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell nextCellId={cell.id} />
    </Fragment>
  )

  return <div className="cell-list">
    <AddCell forceVisible={cells.length === 0} nextCellId={null} />
    {renderCells}
  </div>;
}

export default CellList;
