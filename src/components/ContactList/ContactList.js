import React from 'react';
import PropTypes from 'prop-types';

import ContactItem from './ContactItem';

import s from './ContactList.module.css';

export default function ContactList({ contacts, onDelete }) {
  return (
    <div>
      {contacts.length > 0 && (
        <ul className={s.contacts}>
          {contacts.map(({ id, name, number }) => (
            <ContactItem
              key={id}
              name={name}
              number={number}
              deleteContact={() => onDelete(id)}
            />
          ))}
        </ul>
      )}
      {contacts.length === 0 && (
        <p className={s.noDataMessage}>No data in contacts</p>
      )}
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ),
  ).isRequired,
};
