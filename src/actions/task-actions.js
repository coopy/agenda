export const UPDATE_TASK = 'UPDATE_TASK'
export const CREATE_TASK = 'CREATE_TASK'
export const FOCUS_TASK = 'FOCUS_TASK'
export const MAKE_SUBTASK = 'MAKE_SUBTASK'

export function makeSubtask(taskId, parentTaskId) {
  return {
    type: MAKE_SUBTASK,
    payload: {
      taskId,
      parentTaskId
    }
  }
}

export function createTask (taskId, taskLabel) {
  return {
    type: CREATE_TASK,
    payload: {
      taskId,
      taskLabel
    }
  }
}

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

