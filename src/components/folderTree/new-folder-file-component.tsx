import React, { useState, useEffect } from 'react';
import { isEmpty, isUndefined } from 'lodash';

import { useActions } from '../../hooks/use-actions';

interface NewFolderFileComponentProps {
  containerClass?: string;
  setShowField: (fieldShow: boolean) => void;
  childType: 'folder' | 'file';
  oldFieldName?: string;
  parentNode: string;
  folderOperation: 'create' | 'rename' | 'delete';
}

const NewFolderFileComponent: React.FC<NewFolderFileComponentProps> = ({ containerClass, setShowField, childType, oldFieldName, parentNode, folderOperation }) => {
  const [fieldName, setFieldName] = useState('');
  const { createNewFolder, changeFolderStatus, renameFolder, createNewFile, renameFile } = useActions();

  useEffect(() => {
    if (!isEmpty(oldFieldName) && !isUndefined(oldFieldName)) {
      setFieldName(oldFieldName);
    }
  }, []);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (folderOperation === 'create') {
        if (childType === 'folder') {
          createNewFolder(parentNode, fieldName);
        } else {
          createNewFile(parentNode, fieldName);
        }
      } else if (folderOperation === 'rename') {
        if (childType === 'folder') {
          renameFolder(parentNode, fieldName);
        } else {
          renameFile(parentNode, fieldName);
        }
      }
      setShowField(false);
      changeFolderStatus(parentNode, true);
    }
  }

  return (
    <div className={containerClass}>
      <input
        className="create-field"
        value={fieldName}
        onChange={(e) => setFieldName(e.target.value)}
        onKeyPress={handleKeyPress}
        autoFocus
      />
    </div>
  );
}

export default NewFolderFileComponent;
