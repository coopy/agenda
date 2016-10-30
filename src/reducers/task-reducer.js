import _ from 'lodash'

import { UPDATE_LIST_NAME } from '../actions/task-actions'

const initialState = {
  tasks: [
    {
      id: 'abc123',
      label: 'Task number one',
      subtasks: ['Do the thing', 'Do another thing']
    },
    {
      id: 'bcd234',
      label: 'Item number two',
      subtasks: []
    }
  ]
}

export default function taskReducer (state = initialState, action) {
  switch (action.type) {

    case UPDATE_LIST_NAME:
      const { taskId, taskLabel } = action.payload
      const task = _.find(state.tasks, { id: taskId })
      const rest = _.reject(state.tasks, (list) => list === task)

      return Object.assign({}, state, {
        tasks: [
          Object.assign({}, task, {
            label: taskLabel
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
