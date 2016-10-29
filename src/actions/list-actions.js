export const UPDATE_LIST_NAME = 'UPDATE_LIST_NAME'

export function updateListName (listId, listName) {
  return {
    type: UPDATE_LIST_NAME,
    payload: {
      listId,
      listName
    }
  }
}
