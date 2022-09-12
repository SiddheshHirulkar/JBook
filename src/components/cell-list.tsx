import './cell-list.css';
import React, { Fragment, useEffect } from 'react'
import { useHistory } from 'react-router';

import { useTypedSelector } from '../hooks/use-typed-selector';
import CellListItem from './cell-list-item';
import AddCell from './add-cell';
import { useActions } from '../hooks/use-actions';

const CellList: React.FC = () => {
  const history = useHistory();
  const { storePageLocation } = useActions();

  useEffect(() => {
    storePageLocation(history.location.pathname);
  }, []);

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
