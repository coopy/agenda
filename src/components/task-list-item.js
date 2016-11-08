import React from 'react'

import EditableLabel from './editable-label'
import TaskList from './task-list'

export default ({id, label, subtasks, focused, focusedTaskId, onFocusChange, onTaskCreated, onTaskUpdated, onTab, onTaskBlur, onTaskFocus}) => {

  const renderSubtasks = () => {
    if (!subtasks || !subtasks.length) return null

    return  (
      <TaskList
        isSubtaskList={true}
        tasks={subtasks}
        focusedTaskId={focusedTaskId}
        onFocusChange={onFocusChange}
        onTaskUpdated={onTaskUpdated}
        onTaskCreated={onTaskCreated}
        // onMakeSubtask={(taskId, parentTaskId) => dispatch(makeSubtask(taskId, parentTaskId))}
        onMakeSubtask={() => {}}
      />
    )
  }

  return (
    <li
      onClick={(ev) => {
        ev.stopPropagation();
        onTaskFocus(id)}
      }
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