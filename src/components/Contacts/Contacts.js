import React from 'react';

export default function Contacts({ contact }) {
  return (
    <div>
      <ul>
        {contact.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
