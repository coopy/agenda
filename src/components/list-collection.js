import React, { Component, PropTypes } from 'react'

import { updateListName } from '../actions/list-actions'
import List from './list'

export default class ListCollection extends Component {
  handleListNameChanged (listId, newName) {
    const { props } = this
    props.dispatch(updateListName(listId, newName))
  }

  render () {
    const { lists } = this.props
    const handleListNameChanged = this.handleListNameChanged.bind(this)

    return (
      <ul>
        {lists.map(function (list) {
          return (
            <li key={list.id}>
              <List
                listNameChangedCallback={handleListNameChanged}
                name={list.name}
                id={list.id}
                tasks={list.tasks}
              />
            </li>
          )
        })}
      </ul>
    )
  }
};

ListCollection.propTypes = {

}
