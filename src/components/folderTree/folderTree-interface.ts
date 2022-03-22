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
        name: 'Domestic animals',
        items: [
          {
            type: 'file',
            name: 'Cow.ts'
          },
          {
            type: 'file',
            name: 'Goat.ts'
          },
          {
            type: 'file',
            name: 'Dog.ts'
          }
        ]
      },
      {
        type: 'folder',
        name: 'Wild animals',
        items: [
          {
            type: 'file',
            name: 'Tiger.ts'
          },
          {
            type: 'file',
            name: 'Lion.ts'
          }
        ]
      }
    ]
  }
]
