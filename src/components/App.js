import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Contacts from './Contacts/Contacts';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  handleChangeInput = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ name: '', number: '' });
  };

  addContact = e => {
    const contact = {
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    };

    if (this.state.number === '') {
      alert('You did not wrote a number!');
    } else {
      this.setState(state => {
        return {
          contacts: [...state.contacts, contact],
        };
      });
    }
  };

  render() {
    const { contacts, name, number } = this.state;

    return (
      <>
        <div>
          <h2>Phonebook</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name
              <input
                type="text"
                value={name}
                onChange={this.handleChangeInput}
                name="name"
                autoComplete="off"
              />
            </label>
            <label>
              Number
              <input
                type="phone"
                value={number}
                onChange={this.handleChangeInput}
                name="number"
              />
            </label>
            <button type="submit" onClick={this.addContact}>
              Add contact
            </button>
          </form>
        </div>
        <Contacts contact={contacts} />
      </>
    );
  }
}
