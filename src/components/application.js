import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateTask } from '../actions/task-actions'

import TaskList from './task-list'

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
        <TaskList
          tasks={tasks}
          focusedTaskId="nothing_yet"
          onTaskUpdated={(taskId, label) => dispatch(updateTask(taskId, label))}
        />
      </div>
    )
  }
};

export default connect((state) => state)(Application)
