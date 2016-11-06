import React from 'react'

import EditableLabel from './editable-label'
import TaskList from './task-list'

export default ({id, label, subtasks, focused, focusedTaskId, onTab, onTaskUpdated, onTaskBlur, onTaskFocus}) => {

  const renderSubtasks = () => {
    if (!subtasks || !subtasks.length) return null

    return  (
      <TaskList
        tasks={subtasks}
        focusedTaskId={focusedTaskId}
        onFocusChange={taskId => dispatch(focusTask(taskId))}
        onTaskUpdated={(taskId, label) => dispatch(updateTask(taskId, label))}
        onTaskCreated={(taskId, label) => dispatch(createTask(taskId, label))}
        // onMakeSubtask={(taskId, parentTaskId) => dispatch(makeSubtask(taskId, parentTaskId))}
        onMakeSubtask={() => {}}
      />
    )
  }

  return (
    <li
      onClick={() => onTaskFocus(id)}
    >
      <EditableLabel
        label={label}
        id={id}
        focused={focused}
        onLabelChanged={label => onTaskUpdated(id, label)}
        onTaskBlur={() => onTaskBlur(id)}
        onTab={onTab}
      />
      {renderSubtasks()}
    </li>
  )
}