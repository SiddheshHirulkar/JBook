export interface FileStructure {
  [index: number]: { id: string, type: string, name: string }
}

export interface FolderTreeStructure {
  [index: number]: { id: string, type: string, name: string, items?: FileStructure | FolderTreeStructure }
}

export const folderTreeState: FolderTreeStructure = [
  {
    id: 'fruit',
    type: 'folder',
    name: 'fruits',
    items: [
      {
        id: 'mango',
        type: 'file',
        name: 'mango.ts'
      },
      {
        id: 'apple',
        type: 'file',
        name: 'apple.ts'
      }
    ]
  },
  {
    id: 'animals',
    type: 'folder',
    name: 'animals',
    items: [
      {
        id: 'domesticAnimals',
        type: 'folder',
        name: 'Domestic animals',
        items: [
          {
            id: 'cow',
            type: 'file',
            name: 'Cow.ts'
          },
          {
            id: 'goat',
            type: 'file',
            name: 'Goat.ts'
          },
          {
            id: 'dog',
            type: 'file',
            name: 'Dog.ts'
          }
        ]
      },
      {
        id: 'wildAnimals',
        type: 'folder',
        name: 'Wild animals',
        items: [
          {
            id: 'tiger',
            type: 'file',
            name: 'Tiger.ts'
          },
          {
            id: 'lion',
            type: 'file',
            name: 'Lion.ts'
          }
        ]
      }
    ]
  }
]
