import React, { Component, PropTypes } from 'react';

export default class Task extends Component {
  render() {
    return <span>{this.props.name}</span>;
  }
};

Task.propTypes = {
  name: PropTypes.string
};
