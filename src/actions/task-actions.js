export const UPDATE_TASK = 'UPDATE_TASK'

export function updateTask (taskId, taskLabel) {
  return {
    type: UPDATE_TASK,
    payload: {
      taskId,
      taskLabel
    }
  }
}
