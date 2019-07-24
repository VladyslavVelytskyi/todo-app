import React, {Component} from 'react';
import AppHeader from "../app-header/";
import SearchPanel from "../search-panel/";
import TodoList from "../todo-list/";
import ItemStatusFilter from '../item-status-filter/';

import './app.css';
import ItemAddFrom from "../item-add-form/item-add-form";

export default class App extends Component {

  maxId = 100;

  state = {
    data: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch')
    ],
    buttons: [
      {title: 'Add', checked: true},
      {title: 'Active', checked: false},
      {title: 'Done', checked: false}
    ]
  };

  createTodoItem(label) {
    return {
      label: label,
      important: false,
      id: this.maxId++,
      done: false,
      display: true
    }
  };

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  };

  addItem = (txt) => {
    this.setState(({data}) => {
      return {
        data: [
          ...data,
          this.createTodoItem(txt)
        ]
      }
    })
  };

  onToggleProperty(arr, id, propName) {
    let index = arr.findIndex(item => item.id === id);
    let oldItem = arr[index];
    let newItem = {
      ...oldItem,
      [propName]: !oldItem[propName]
    };

    return [
      ...arr.slice(0, index),
      newItem,
      ...arr.slice(index + 1)
    ]
  }

  onToggleImportant = (id) => {
    this.setState(({data}) => {
      return {
        data: this.onToggleProperty(data, id, 'important')
      }
    })
  };

  onToggleDone = (id) => {
    this.setState(({data}) => {
      return {
        data: this.onToggleProperty(data, id, 'done')
      }
    })
  };

  onSearchChange = (value) => {
    this.setState(({data}) => {
      let items = data.map(item => {
        return {
          ...item,
          display: item.label.toLowerCase().indexOf(value) !== -1
        };
      });

      return {
        data: [...items]
      }
    });
  };

  onChangeFilter = (value) => {
    this.setState(({ data, buttons }) => {
      let items = data.map(item => {
        item.display = !((value === 'Active' && item.done === true) || (value === 'Done' && item.done === false));
        return item;
      });

      let btns = buttons.map( btn => {
        btn.checked = btn.title === value;
        return btn;
      });

      return {
        data: [...items],
        buttons: [...btns]
      }
    })
  };

  render() {
    let { data, buttons } = this.state;

    const countDone = data.reduce((acc, index) => {
      return acc += index.done ? 1 : 0
    }, 0);

    const countTodo = data.length - countDone;

    return (
        <div
            className='todo-app'>
          <AppHeader
              todo={ countTodo }
              done={ countDone }/>
          <div
              className='top-panel d-flex'>
            <SearchPanel
                onSearchChange={ this.onSearchChange }/>
            <ItemStatusFilter
                buttons={ buttons }
                onChangeFilter={ this.onChangeFilter }/>
          </div>
          <TodoList
              todos={ data }
              onDeleted={ this.deleteItem }
              onToggleImportant={ this.onToggleImportant }
              onToggleDone={ this.onToggleDone }/>
          <ItemAddFrom
              addItem={ this.addItem }/>
        </div>
    )
  };
}
