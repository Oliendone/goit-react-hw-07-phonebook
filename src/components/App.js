import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  changeFilter = filter => {
    this.setState({ filter: filter.target.value });
  };

  addContact = (name, number) => {
    const { contacts } = this.state;

    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    if (
      contacts.find(contact => {
        return contact.name.toLowerCase() === name.toLowerCase();
      })
    ) {
      alert(`${name} is already in contacts.`);
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
    const { filter } = this.state;

    const filteredContacts = this.getFilteredTasks();

    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onAddContact={this.addContact} />
          <h2>Contacts</h2>
          <Filter value={filter} onChangeFilter={this.changeFilter} />
          <ContactList contact={filteredContacts} />
        </div>
      </>
    );
  }
}
