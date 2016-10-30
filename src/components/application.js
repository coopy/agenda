import React, { Component } from 'react'
import { connect } from 'react-redux'

import { UPDATE_TASK } from '../actions/task-actions'

import EditableLabel from './editable-label'

require('../styles/reset.css')
import styles from './application.css'

export class Application extends React.Component {
  render () {
    const { props } = this
    const { dispatch } = props
    const { tasks } = props.taskReducer

    return (
      <div className={styles.application}>
        <h1>Agenda</h1>
        {tasks.map(task => (
          <EditableLabel
            key={task.id}
            label={task.label}
            labelChangedCallback={label => dispatch(updateTask(task.id, label))}
          />
        ))}
      </div>
    )
  }
};

export default connect((state) => state)(Application)
