import React, { Component } from 'react';

import './item-add-from.css';

export default class ItemAddFrom extends Component {

  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState( {
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.label);
    this.setState({
      label: ''
    });
  };

  render() {
    return (
        <form
            className='item-add-from mt-4 d-flex'
            onSubmit={ this.onSubmit }>
          <input
              type="text"
              className='form-control mr-2'
              onChange={ this.onLabelChange }
              placeholder='What needs to done'
              value = { this.state.label }/>
          <button
              className='btn btn-outline-secondary w-50'>
            Add Item
          </button>
        </form>
    )
  }
}
