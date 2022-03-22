export interface FileStructure {
  [index: number]: { type: string, name: string }
}

export interface FolderTreeStructure {
  [index: number]: { type: string, name: string, items?: FileStructure | FolderTreeStructure }
}

export const folderTreeState: FolderTreeStructure = [
  {
    type: 'folder',
    name: 'fruits',
    items: [
      {
        type: 'file',
        name: 'mango.ts'
      },
      {
        type: 'file',
        name: 'apple.ts'
      }
    ]
  },
  {
    type: 'folder',
    name: 'animals',
    items: [
      {
        type: 'folder',
        name: 'domestic animals',
        items: []
      },
      {
        type: 'file',
        name: 'cow.ts'
      }
    ]
  }
]
