import React from 'react';

import ContactItem from './ContactItem';

export default function ContactList({ contact, onDeleteContact }) {
  return (
    <div>
      <ul>
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
