import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Contacts from './Contacts/Contacts';
import Filter from './Contacts/Filter';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  changeFilter = filter => {
    this.setState({ filter: filter.target.value });
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

  getFilteredTasks = () => {
    const { filter, contacts } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { contacts, filter, name, number } = this.state;

    const filteredContacts = this.getFilteredTasks();

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
        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        <Contacts contact={filteredContacts} />
      </>
    );
  }
}
