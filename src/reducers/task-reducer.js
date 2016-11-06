import _ from 'lodash'

import { CREATE_TASK, FOCUS_TASK, UPDATE_TASK } from '../actions/task-actions'

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

    case CREATE_TASK: {
      const { taskId, taskLabel } = action.payload

      return Object.assign({}, state, {
        tasks: state.tasks.concat([
          {
            id: taskId,
            label: taskLabel || ''
          }
        ]),
        // Dirty trick: Focus the newly created task!
        focusedTaskId: taskId
      })
    }

    case UPDATE_TASK: {
      const { taskId, taskLabel } = action.payload
      const task = _.find(state.tasks, { id: taskId })
      // const rest = _.reject(state.tasks, (list) => list === task)
      const taskIndex = state.tasks.indexOf(task)

      return Object.assign({}, state, {
        tasks: [
          ...state.tasks.slice(0, taskIndex),
          Object.assign({}, task, {
            label: taskLabel
          }),
          ...state.tasks.slice(taskIndex + 1)
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
