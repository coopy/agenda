import React, { Component, PropTypes } from 'react'

import EditableLabel from './editable-label'
import Task from './task'

import styles from './list.css'

export default class List extends Component {
  handleLabelChanged(newName) {
    this.props.listNameChangedCallback(this.props.id, newName);
  }

  render() {
    return (
      <div className={styles.root}>
        <EditableLabel
          prompt='Enter project name'
          label={this.props.name}
          labelChangedCallback={this.handleLabelChanged.bind(this)}
        />
        <ul className={styles.list}>
          {this.props.tasks.map(function (task, index) {
            return (
              <li key={index}>
                <Task name={task}/>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

List.propTypes = {
  listNameChangedCallback: PropTypes.func.isRequired
};
