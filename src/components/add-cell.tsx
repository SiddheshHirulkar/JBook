import './add-cell.css';
import React from 'react';
import { useActions } from '../hooks/use-actions';

interface AddCellProps {
  nextCellId: string | null;
  forceVisible?: boolean;
}

const AddCell: React.FC<AddCellProps> = ({ nextCellId, forceVisible }) => {
  const { insertCellAfter } = useActions();
  
  return (
    <div className={`add-cell ${forceVisible && 'force-visible'}`}>
      <button className="button is-rounded is-primary is-small" onClick={() => insertCellAfter(nextCellId, 'code')}>
        <span className="icon is-small">
          <i className="fas fa-plus" />
        </span>
        <span>Code</span>
      </button>
      <button className="button is-rounded is-primary is-small" onClick={() => insertCellAfter(nextCellId, 'text')}>
        <span className="icon is-small">
          <i className="fas fa-plus" />
        </span>
        <span>Text</span>
      </button>
      <div className="divider"></div>
    </div>
  );
}

export default AddCell;
