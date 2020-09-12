import React from 'react';
import PropTypes from 'prop-types';

import s from './ContactList.module.css';

export default function ContactItem({ name, number, deleteContact }) {
  return (
    <>
      <li className={s.contactItem}>
        <p className={s.contactName}>{name}</p>
        <p className={s.contactNumber}>{number}</p>
        <button
          className={s.deleteContact}
          type="button"
          onClick={deleteContact}
        >
          Delete
        </button>
      </li>
    </>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
