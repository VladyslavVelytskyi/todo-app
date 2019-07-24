import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import './todo-list-item.css';

export default class TodoListItem extends Component {

  render() {
    const {
      label,
      onDeleted,
      onToggleImportant,
      onToggleDone,
      done,
      important
    } = this.props;

    let classNames = 'todo-list-item' + (done ? ' done' : '');
    classNames += important ? ' important' : '';

    return (
        <div className = { classNames }>
        <span
            className = 'todo-list-item-label'
            onClick = { onToggleDone }>
          { label }
        </span>

          <button
              type = 'button'
              className = 'btn btn-outline-success btn-sm float-right'
              onClick = { onToggleImportant }>
            <FontAwesomeIcon icon = { faExclamation }/>

          </button>

          <button
              type = 'button'
              className = 'btn btn-outline-danger btn-sm float-right'
              onClick = { onDeleted } >
            <FontAwesomeIcon icon = { faTrashAlt }/>
          </button>
        </div>
    )
  };
}
