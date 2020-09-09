import React from 'react';

export default function Contacts({ contact }) {
  return (
    <div>
      <h2>Contacts</h2>
      <label>
        <input type="text" value={} onChange={} />
      </label>

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
