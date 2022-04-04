let folderIdState: any = {}

export const makeFolderIdState = (folderTree: any) => {
  folderTree.forEach((treeContent: any) => {
    if (treeContent.type === 'folder') {
      folderIdState[treeContent.id] = false;
    }
  });

  return folderIdState;
};
