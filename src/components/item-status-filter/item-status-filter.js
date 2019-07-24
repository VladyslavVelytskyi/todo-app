import React, {Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

  state = {
    buttons: [
      {title: 'Add', checked: true},
      {title: 'Active', checked: false},
      {title: 'Done', checked: false}
    ]
  };

  onButtonClick = (target) => {
    this.setState(({ buttons }) => {
      let btns = buttons.map( btn => {
        btn.checked = btn.title === target;
        return btn;
      });

      return {
        buttons: [...btns]
      }
    });
  };

  constructor() {
    super();
  }


  render() {
    const { buttons, onChangeFilter } = this.props;

    return (
        <div className="btn-group"
             onClick={ (e) => onChangeFilter(e.target.closest('BUTTON').innerHTML) }>
          {
            buttons.map( ({ title, checked }) => {
              let classname = 'btn ' + (checked ? 'btn-info' : 'btn-outline-secondary');
              return (
                  <button type="button"
                          className={ classname }>
                    {title}</button>
              )
            })
          }
        </div>
    );
  }
};
