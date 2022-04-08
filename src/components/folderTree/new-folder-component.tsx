import React, { useState } from 'react';

interface NewFolderComponentProps {
  containerClass?: string;
  setShowField: (fieldShow: boolean) => void;
}

const NewFolderComponent: React.FC<NewFolderComponentProps> = ({ containerClass, setShowField }) => {
  const [folderName, setFolderName] = useState('');

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setShowField(false);
    }
  }

  return (
    <div className={containerClass}>
      <input
        className="create-field"
        value={folderName}
        onChange={(e) => setFolderName(e.target.value)}
        onKeyPress={handleKeyPress}
        autoFocus
      />
    </div>
  );
}

export default NewFolderComponent;
