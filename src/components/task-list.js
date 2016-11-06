import _ from 'lodash'
import React from 'react'
import uuid from 'uuid'

import TaskListItem from './task-list-item'


export default ({tasks, focusedTaskId, onFocusChange, onTaskCreated, onTaskUpdated}) => {
  // TODO Only listen for keyboard and blur events when you "own" a taskId.
  const focusedTask = _.find(tasks, { id: focusedTaskId })
  const focusedTaskIndex = tasks.indexOf(focusedTask)

  const focusNextOrCreateNewTask = index => {
    const value = tasks[index].label.trim()

    if (!value) return

    const nextTaskIndex = index + 1

    if (nextTaskIndex === tasks.length) {
      return createNewTask()
    }

    const nextTask = tasks[nextTaskIndex]

    if (nextTask) {
      onFocusChange(nextTask.id)
    }
  }

  const createNewTask = (label = '') => {
    const taskId = uuid()
    onTaskCreated(taskId, label)
  }

  const handleKeyPress = key => {
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
      },
      Enter: () => focusNextOrCreateNewTask(focusedTaskIndex)
    }

    if (fnMap[key]) fnMap[key]()
  }

  const handleTaskBlur = index => {
    // focusNextOrCreateNewTask(index)
  }

  return (
    <ul onKeyUp={ev => handleKeyPress(ev.key)}>
      {tasks.map((task, index) => (
        <TaskListItem
          label={task.label}
          id={task.id}
          key={task.id}
          focused={task.id === focusedTaskId}
          onTaskUpdated={onTaskUpdated}
          // TODO This gets passed ID from child
          onTaskBlur={() => handleTaskBlur(index)}
          onTaskFocus={id => onFocusChange(id)}
        />
      ))}
    </ul>
  )
}