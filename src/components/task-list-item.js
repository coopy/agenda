import React from 'react'

import EditableLabel from './editable-label'

export default ({id, label, focused, onTaskUpdated, onTaskBlur, onTaskFocus}) => (
  <li
    key={id}
    onClick={() => onTaskFocus(id)}
  >
    <EditableLabel
      label={label}
      focused={focused}
      onLabelChanged={label => onTaskUpdated(id, label)}
      onTaskBlur={() => onTaskBlur(id)}

    />
  </li>
)