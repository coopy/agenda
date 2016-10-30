import React from 'react'
import _ from 'lodash'

import TaskListItem from './task-list-item'

export default ({tasks, focusedTaskId, onFocusChange, onTaskUpdated}) => {
  // TODO Only listen for keyboard and blur events when you "own" a taskId.
  const focusedTask = _.find(tasks, { id: focusedTaskId })
  const focusedTaskIndex = tasks.indexOf(focusedTask)

  const handleArrowKeyPress = key => {
    const fnMap = {
      ArrowUp: () => {
        if (focusedTaskIndex > 0) {
          // Focus on previous task
          onFocusChange(tasks[focusedTaskIndex - 1].id)
        }
      },
      ArrowDown: () => {
        if (focusedTaskIndex + 1 < tasks.length) {
          // Focus on next task
          onFocusChange(tasks[focusedTaskIndex + 1].id)
        }
      }
    }

    console.log(key)

    if (fnMap[key]) fnMap[key]()
  }

  const handleTaskBlur = index => {
    // TODO DO NOT EARLY RETURN
    return

    const nextTaskIndex = index + 1

    if (nextTaskIndex === tasks.length) {
      // TODO Blurred last task; create new task
      // TODO create new task ID
      return
    }

    const nextTask = tasks[nextTaskIndex]

    if (nextTask) {
      onFocusChange(nextTask.id)
    }
  }

  return (<ul onKeyUp={ev => handleArrowKeyPress(ev.key)}>
    {tasks.map((task, index) => (
      <TaskListItem
        label={task.label}
        id={task.id}
        key={task.id}
        focused={task.id === focusedTaskId}
        onTaskUpdated={onTaskUpdated}
        onTaskBlur={() => handleTaskBlur(index)}
      />
    ))}
  </ul>)
}