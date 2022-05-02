import React, { useState, useEffect } from 'react';
import { isEmpty, isUndefined } from 'lodash';

import { useActions } from '../../hooks/use-actions';

interface NewFolderFileComponentProps {
  containerClass?: string;
  setShowField: (fieldShow: boolean) => void;
  childType: 'folder' | 'file';   // childType is not used for now but it will be fed to an action creator which will add folder or file state
  oldFieldName?: string;
  parentNode: string;
  folderOperation: 'create' | 'rename' | 'delete';
}

const NewFolderFileComponent: React.FC<NewFolderFileComponentProps> = ({ containerClass, setShowField, childType, oldFieldName, parentNode, folderOperation }) => {
  const [fieldName, setFieldName] = useState('');
  const { createNewFolder, changeFolderStatus, renameFolder } = useActions();

  useEffect(() => {
    if (!isEmpty(oldFieldName) && !isUndefined(oldFieldName)) {
      setFieldName(oldFieldName);
    }
  }, []);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (folderOperation === 'create') {
        createNewFolder(parentNode, fieldName);
      } else if (folderOperation === 'rename') {
        renameFolder(parentNode, fieldName);
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
