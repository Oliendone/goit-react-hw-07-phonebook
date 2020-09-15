import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import s from './App.module.css';

export default class App extends Component {
  static propTypes = {
    filter: PropTypes.string,
    contacts: PropTypes.arrayOf(
      PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      ),
    ),
  };

  state = {
    contacts: [],
    filter: '',
  };

  changeFilter = filter => {
    this.setState({ filter: filter.target.value });
  };

  addContact = (name, number) => {
    const { contacts } = this.state;

    const newContact = {
      id: uuidv4(),
      name,
      number,
    };

    const isInContacts = contacts.find(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });

    if (isInContacts) {
      alert(`${name} is already in contacts.`);
    } else if (number === '') {
      alert("You don't wrote a nubmer.");
    } else {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, newContact],
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
        <div className={s.wrapperPhonebook}>
          <h1 className={s.phoneBookHeading}>Phonebook</h1>
          <ContactForm onAddContact={this.addContact} />
          <h2 className={s.contactsHeading}>Contacts</h2>
          {contacts.length > 0 && (
            <Filter value={filter} onChangeFilter={this.changeFilter} />
          )}
        </div>
        {contacts.length !== 0 && (
          <ContactList
            contacts={filteredContacts}
            onDelete={this.deleteContact}
          />
        )}
      </>
    );
  }
}
