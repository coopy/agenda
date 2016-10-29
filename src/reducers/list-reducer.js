import _ from 'lodash'

import { UPDATE_LIST_NAME } from '../actions/list-actions'

const initialState = {
  lists: [
    {
      id: 'abc123',
      name: 'foo',
      tasks: ['Do the thing', 'Do another thing']
    },
    {
      id: 'bcd234',
      name: '',
      tasks: []
    }
  ]
}

export default function listReducer (state = initialState, action) {
  switch (action.type) {

    case UPDATE_LIST_NAME:
      const { listId, listName } = action.payload
      const updateList = _.find(state.lists, { id: listId })
      const rest = _.reject(state.lists, (list) => list === updateList)

      return Object.assign({}, state, {
        lists: [
          Object.assign({}, updateList, {
            name: listName
          }),
          ...rest
        ]
      })
      break

    default:
      return state
      break
  }
}
