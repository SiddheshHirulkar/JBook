import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'

interface FileComponentProps {
  name: string,
  type: string
}

const FileComponent: React.FC<FileComponentProps> = ({ name }) => {
  return (
    <Fragment>
      <li className="tree-file-container">
        <span className="tree-file-specifications">
          <FontAwesomeIcon className="file-icon" icon={faFile} />
          <p className="file-text">{name}</p>
        </span>
        <span className="tree-file-icon-specification">
          <FontAwesomeIcon className="tree-file-icon" icon={faPencil} />
          <FontAwesomeIcon className="tree-file-icon" icon={faTrash} />
        </span>
      </li>
    </Fragment>
  );
}

export default FileComponent;
