import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import s from './App.module.css';
import styles from './AppearHeading.module.css';
import fade from '../components/Filter/filterAppear.module.css';
import { connect } from 'react-redux';
import contactsOperations from '../redux/contacts/contactsOperations';
import contactsSelectors from '../redux/contacts/contactsSelectors';

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
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
  isContacts: contactsSelectors.getContactsItems(state).length > 0,
});

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
