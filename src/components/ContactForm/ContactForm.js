import React, { Component } from 'react';
import PropTypes from 'prop-types';

import s from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export default class ContactForm extends Component {
  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.number,
  };

  state = { ...INITIAL_STATE };

  handleChangeInput = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  reset = () => {
    return {
      name: '',
      number: '',
    };
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddContact(this.state.name, this.state.number);

    this.setState(this.reset());
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form className={s.phoneBookForm} onSubmit={this.handleSubmit}>
          <label>
            <p className={s.contactName}>Name</p>
            <input
              className={s.nameInput}
              type="text"
              value={name}
              onChange={this.handleChangeInput}
              name="name"
              autoComplete="off"
            />
          </label>
          <label>
            <p className={s.contactNumber}>Number</p>
            <input
              className={s.numberInput}
              type="phone"
              value={number}
              onChange={this.handleChangeInput}
              name="number"
              autoComplete="off"
            />
          </label>
          <button
            className={s.addButton}
            type="submit"
            onClick={this.addContact}
          >
            Add contact
          </button>
        </form>
      </>
    );
  }
}
