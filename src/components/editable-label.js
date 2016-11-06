import React, { Component, PropTypes } from 'react'

import styles from './editable-label.css'

export default class EditableLabel extends Component {
  handleInputBlur (value) {
    const { label, onTaskBlur, onLabelChanged } = this.props

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
    const { id, label, onTab, prompt, onLabelChanged } = this.props

    return (
      <input
        className={styles.input}
        ref={(el) => this.$input = el}
        placeholder={prompt}
        value={label}
        onChange={ev => onLabelChanged(ev.target.value)}
        onBlur={ev => this.handleInputBlur(ev.target.value)}
        onKeyDown={ev => {
          if (ev.key === 'Tab') {
          console.log(id, ev.key)
            ev.preventDefault()
            ev.stopPropagation()
            onTab(id)
          }
        }}
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
