import React, { Component, PropTypes } from 'react'

import styles from './editable-label.css'

export default class EditableLabel extends Component {
  handleInputBlur (value) {

    const { onTaskBlur, onLabelChanged, label } = this.props

    if (label !== value) {
      onLabelChanged(value)
    }

    onTaskBlur()
  }

  handleLabelClick (ev) {
    // this.setState({ editing: true })
  }

  componentDidMount () {
    this.$input && this.$input.focus()
  }

  componentDidUpdate () {
    this.$input && this.$input.focus()
  }

  renderInput () {
    return (
      <input
        className={styles.input}
        ref={(el) => this.$input = el}
        placeholder={this.props.prompt}
        value={this.props.label}
        onChange={ev => this.props.onLabelChanged(ev.target.value)}
        onBlur={ev => this.handleInputBlur(ev.target.value)}
      />
    )
  }

  renderLabel () {
    return (
      <label className={styles.label}>
        {this.props.label}
      </label>
    )
  }

  render () {
    const {focused} = this.props

    return (
      <span className={styles.editableLabel}>
        {focused ? this.renderInput() : this.renderLabel()}
      </span>
    )
  }
};

EditableLabel.propTypes = {
  onLabelChanged: PropTypes.func.isRequired,
  prompt: PropTypes.string,
  label: PropTypes.string
}
