import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

import ContactItem from './ContactItem';

import s from './ContactList.module.css';
import animation from './contactItemAnimation.module.css';
import contactsOperations from '../../redux/contacts/contactsOperations';
import contactsSelectors from '../../redux/contacts/contactsSelectors';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <TransitionGroup component="ul" className={s.contacts}>
        {contacts.map(({ id, name, number }) => (
          <CSSTransition key={id} timeout={250} classNames={animation}>
            <ContactItem
              key={id}
              name={name}
              number={number}
              deleteContact={() => onDelete(id)}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ),
  ).isRequired,
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getFilteredContacts(state),
});

const mapDispatchToProps = {
  onDelete: contactsOperations.deleteContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
