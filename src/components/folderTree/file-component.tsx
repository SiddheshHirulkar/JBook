import React, { Fragment, useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

import NewFolderFileComponent from './new-folder-file-component';
import { isNull } from 'lodash';
import { useActions } from '../../hooks/use-actions';

interface FileComponentProps {
  name: string,
  type: string,
  id: string
}

const FileComponent: React.FC<FileComponentProps> = ({ name, id }) => {

  const [showRenameFile, setShowRenameFile] = useState(false);
  const [fileOperation, setFileOperation] = useState<'create' | 'rename' | 'delete'>('create');
  const [fileName, setFileName] = useState('');
  const { deleteFile } = useActions();
  let fieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sidebar: HTMLInputElement | null = document.querySelector('#sidebar');
    if (!isNull(sidebar)) {
      sidebar.addEventListener('click', (event: any) => {
        if (!isNull(fieldRef.current) && !fieldRef.current.contains(event.target)) {
          setShowRenameFile(false);
        }
      });
    }
  });

  const renameEntity = () => {
    setShowRenameFile(!showRenameFile);
    setFileOperation('rename');
    setFileName(name);
  }

  const deleteEntity = () => {
    deleteFile(id);
  }

  return (
    <Fragment>
      <li className="tree-file-container">
        <span className="tree-file-specifications">
          <FontAwesomeIcon className="file-icon" icon={faFile} />
          {showRenameFile ? (
        <div className="folder-text" ref={fieldRef}>
          <NewFolderFileComponent 
            setShowField={setShowRenameFile}
            childType='file'
            oldFieldName={fileName}
            parentNode={id}
            folderOperation={fileOperation}
          />
        </div>
        ) : (<p className="file-text">{name}</p>)
      }
        </span>
        <span className="tree-file-icon-specification">
          <FontAwesomeIcon className="tree-file-icon" icon={faPencil} onClick={renameEntity} />
          <FontAwesomeIcon className="tree-file-icon" icon={faTrash} onClick={deleteEntity} />
        </span>
      </li>
    </Fragment>
  );
}

export default FileComponent;
