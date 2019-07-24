import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

  render() {

    const { onSearchChange } = this.props;

    return (
        <input
            type='text'
            className='form-control search-input'
            placeholder='type to search'
            onChange={ (e) => onSearchChange(e.target.value.toLowerCase()) } />
    );
  }
};
