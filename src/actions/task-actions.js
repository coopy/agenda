export const UPDATE_TASK = 'UPDATE_TASK'
export const FOCUS_TASK = 'FOCUS_TASK'

export function updateTask (taskId, taskLabel) {
  return {
    type: UPDATE_TASK,
    payload: {
      taskId,
      taskLabel
    }
  }
}

export function focusTask (taskId) {
  return {
    type: FOCUS_TASK,
    payload: {
      taskId
    }
  }
}

