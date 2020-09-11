import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [],
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
    } else if (number === '') {
      alert("You don't wrote a nubmer.");
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

  deleteContact = id => {
    this.setState(state => {
      return {
        contacts: state.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = this.getFilteredTasks();

    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onAddContact={this.addContact} />
          <h2>Contacts</h2>
          {contacts.lenght > 1 ? (
            <Filter value={filter} onChangeFilter={this.changeFilter} />
          ) : (
            ''
          )}
          <ContactList
            contact={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        </div>
      </>
    );
  }
}
