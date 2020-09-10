import React from 'react';

import ContactItem from './ContactItem';

export default function ContactList({ contact }) {
  return (
    <div>
      <ul>
        {contact.map(({ id, name, number }) => (
          <ContactItem key={id} name={name} number={number} />
        ))}
      </ul>
    </div>
  );
}
