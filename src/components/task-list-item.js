import React from 'react'

import EditableLabel from './editable-label'

export default ({id, label, focused}) => (
  <li key={id}>
    <EditableLabel
      label={label}
      focused={focused}
      labelChangedCallback={label => onTaskUpdated(id, label)}
    />
  </li>
)