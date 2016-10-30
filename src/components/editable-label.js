import React, { Component, PropTypes } from 'react'

import styles from './editable-label.css'

export default class EditableLabel extends Component {
  constructor () {
    super()
    // TODO editing state is a (context?) ID prop this label can compare against its' related list
    // item ID.
    this.state = { editing: false }
  }

  handleInputBlur (ev) {
    const { value } = ev.target
    this.setState({ editing: false })
    if (this.props.label !== value) {
      this.props.labelChangedCallback(value)
    }
  }

  handleLabelClick (ev) {
    this.setState({ editing: true })
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
        defaultValue={this.props.label}
        onBlur={this.handleInputBlur.bind(this)}
      />
    )
  }

  renderLabel () {
    return (
      <label
        className={styles.label}
        onClick={this.handleLabelClick.bind(this)}
      >
        {this.props.label}
      </label>
    )
  }

  renderInputOrLabel () {
    // return this.renderInput()

    if (this.props.label && !this.state.editing) {
      return this.renderLabel()
    } else {
      return this.renderInput()
    }
  }

  render () {
    return (
      <span className={styles.editableLabel}>
        {this.renderInputOrLabel()}
      </span>
    )
  }
};

EditableLabel.propTypes = {
  labelChangedCallback: PropTypes.func.isRequired,
  prompt: PropTypes.string,
  label: PropTypes.string
}
