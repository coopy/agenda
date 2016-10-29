import React, { Component } from 'react'
import { connect } from 'react-redux'

import ListCollection from './list-collection'

export class Application extends React.Component {
  render () {
    const { props } = this
    const { lists } = props.listReducer

    return (
      <div>
        <h1>Agenda</h1>
        <ListCollection
          lists={lists}
          dispatch={props.dispatch}
        />
      </div>
    )
  }
};

export default connect((state) => state)(Application)
