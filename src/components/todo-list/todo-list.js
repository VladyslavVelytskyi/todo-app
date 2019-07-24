import React, { Component } from "react";

import './todo-list.css';
import TodoListItem from "../todo-list-item/todo-list-item"

export default class TodoList extends Component {
  render() {
    const {
      todos,
      onDeleted,
      onToggleImportant,
      onToggleDone
    } = this.props;

    return (
        <ul className='list-group todo-list'>
          {
            todos.map((item) => {

              let {id, display, ...itemProps} = item;

              let classnames = 'list-group-item' + (display ? ' show' : ' hide');

              return (
                  <li key={id} className={ classnames }>
                    <TodoListItem
                        {...itemProps}
                        onDeleted = { () => onDeleted(id) }
                        onToggleImportant = { () => onToggleImportant(id) }
                        onToggleDone = { () => onToggleDone(id) }
                    />
                  </li>
              )
            })
          }
        </ul>
    )
  }
};
