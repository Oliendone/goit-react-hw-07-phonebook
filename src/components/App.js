import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import WarningMessage from './WarningMessage/WarningMessage';

import s from './App.module.css';
import styles from './AppearHeading.module.css';
import fade from '../components/Filter/filterAppear.module.css';
import warning from '../components/WarningMessage/appearMessage.module.css';

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
    warningMessage: '',
    pushWarningMessage: false,
  };

  componentDidMount() {
    const existedContacts = localStorage.getItem('contacts');

    if (existedContacts) {
      this.setState({ contacts: JSON.parse(existedContacts) });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

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
      this.setState({
        warningMessage: 'Contact already exist!',
        pushWarningMessage: true,
      });
      setTimeout(() => this.setState({ pushWarningMessage: false }), 3000);
    } else if (number === '') {
      this.setState({
        warningMessage: 'Please, write a number.',
        pushWarningMessage: true,
      });
      setTimeout(() => this.setState({ pushWarningMessage: false }), 3000);
    } else {
      this.setState(prevState => {
        return {
          contacts: [newContact, ...prevState.contacts],
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
    const { contacts, filter, warningMessage, pushWarningMessage } = this.state;
    const filteredContacts = this.getFilteredTasks();
    const isContacts = contacts.length > 0;
    const warningMessageText = warningMessage;

    return (
      <>
        <div className={s.wrapperPhonebook}>
          <CSSTransition
            in={true}
            appear={true}
            classNames={styles}
            timeout={500}
            unmountOnExit
          >
            <h1 className={s.phoneBookHeading}>Phonebook</h1>
          </CSSTransition>
          <ContactForm onAddContact={this.addContact} />
          <h2 className={s.contactsHeading}>Contacts</h2>
          <CSSTransition
            in={isContacts}
            classNames={fade}
            timeout={250}
            unmountOnExit
          >
            <Filter value={filter} onChangeFilter={this.changeFilter} />
          </CSSTransition>
        </div>
        {/* <p className={s.noDataMessage}>No data in contacts</p> */}
        <ContactList
          contacts={filteredContacts}
          onDelete={this.deleteContact}
        />
        <CSSTransition
          in={pushWarningMessage}
          classNames={warning}
          timeout={250}
          unmountOnExit
        >
          <WarningMessage messageText={warningMessageText} />
        </CSSTransition>
      </>
    );
  }
}
