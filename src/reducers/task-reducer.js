import _ from 'lodash'

import { FOCUS_TASK, UPDATE_TASK } from '../actions/task-actions'

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
  ],
  focusedTaskId: 'abc123'
}

export default function taskReducer (state = initialState, action) {
  switch (action.type) {

    case UPDATE_TASK: {
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
    }

    case FOCUS_TASK: {
      const { taskId } = action.payload
      return Object.assign({}, state, {
        focusedTaskId: taskId
      })
    }

    default:
      return state
  }
}
