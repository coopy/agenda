import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createTask, focusTask, makeSubtask, updateTask } from '../actions/task-actions'

import TaskList from './task-list'

require('../styles/reset.css')
import styles from './application.css'

export class Application extends React.Component {

  render () {
    const { props } = this
    const { dispatch } = props
    const { tasks, focusedTaskId } = props.taskReducer

    return (
      <div className={styles.application}>
        <h1>Agenda</h1>
        <TaskList
          tasks={tasks}
          focusedTaskId={focusedTaskId}
          onFocusChange={taskId => dispatch(focusTask(taskId))}
          onTaskUpdated={(taskId, label) => dispatch(updateTask(taskId, label))}
          onTaskCreated={(taskId, label) => dispatch(createTask(taskId, label))}
          onMakeSubtask={(taskId, parentTaskId) => dispatch(makeSubtask(taskId, parentTaskId))}
        />
      </div>
    )
  }
};

export default connect((state) => state)(Application)
