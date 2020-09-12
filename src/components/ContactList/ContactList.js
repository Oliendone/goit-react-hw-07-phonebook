import React from 'react';
import PropTypes from 'prop-types';

import ContactItem from './ContactItem';

import s from './ContactList.module.css';

export default function ContactList({ contact, onDeleteContact }) {
  return (
    <div>
      <ul className={s.contacts}>
        {contact.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            deleteContact={() => onDeleteContact(id)}
          />
        ))}
      </ul>
    </div>
  );
}

ContactList.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ),
  ).isRequired,
};

// ContactList.propTypes = {
//   contact: PropTypes.shape({
//     id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     name: PropTypes.string,
//     number: PropTypes.number,
//   }).isRequired,
// };
