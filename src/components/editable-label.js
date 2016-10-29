import React, { Component, PropTypes } from 'react'

const styles = {
  base: {
    fontSize: '1em',
    display: 'block'
  }
}

export default class EditableLabel extends Component {
  constructor () {
    super()
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
        style={styles.base}
        ref={(el) => this.$input = el}
        placeholder={this.props.prompt}
        defaultValue={this.props.label}
        onBlur={this.handleInputBlur.bind(this)}
      />
    )
  }

  renderLabel () {
    return (
      <strong
        style={styles.base}
        onClick={this.handleLabelClick.bind(this)}
      >
        {this.props.label}
      </strong>
    )
  }

  renderInputOrLabel () {
    if (this.props.label && !this.state.editing) {
      return this.renderLabel()
    } else {
      return this.renderInput()
    }
  }

  render () {
    return (
      <span>
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
