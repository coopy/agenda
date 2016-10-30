import React from 'react'

import TaskListItem from './task-list-item'

export default ({tasks, focusedTaskId, onTaskUpdated}) => (
  <ul>
    {tasks.map(task => (
      <TaskListItem
        label={task.label}
        id={task.id}
        key={task.id}
        focused={task.id === focusedTaskId}
        onTaskUpdated={onTaskUpdated}
      />
    ))}
  </ul>
)