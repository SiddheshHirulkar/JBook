import React, { useState, useEffect } from 'react';
import { isEmpty, isUndefined } from 'lodash';

interface NewFolderFileComponentProps {
  containerClass?: string;
  setShowField: (fieldShow: boolean) => void;
  childType: 'folder' | 'file';   // childType is not used for now but it will be fed to an action creator which will add folder or file state
  oldFieldName?: string;
}

const NewFolderFileComponent: React.FC<NewFolderFileComponentProps> = ({ containerClass, setShowField, childType, oldFieldName }) => {
  const [fieldName, setFieldName] = useState('');

  useEffect(() => {
    if (!isEmpty(oldFieldName) && !isUndefined(oldFieldName)) {
      setFieldName(oldFieldName);
    }
  }, []);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setShowField(false);
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
