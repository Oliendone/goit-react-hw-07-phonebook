import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import s from './App.module.css';
import styles from './AppearHeading.module.css';
import fade from '../components/Filter/filterAppear.module.css';
import warning from '../components/WarningMessage/appearMessage.module.css';
import { connect } from 'react-redux';

class App extends Component {
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

  render() {
    const { warningMessage, pushWarningMessage } = this.state;

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
          <ContactForm />
          <h2 className={s.contactsHeading}>Contacts</h2>
          <CSSTransition
            in={this.props.isContacts}
            classNames={fade}
            timeout={250}
            unmountOnExit
          >
            <Filter />
          </CSSTransition>
        </div>
        <ContactList />
      </>
    );
  }
}

const mapStateToProps = state => ({
  isContacts: state.contacts.items.length > 0,
});

export default connect(mapStateToProps)(App);
