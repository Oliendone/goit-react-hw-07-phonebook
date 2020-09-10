import React from 'react';

export default function ContactItem({ id, name, number }) {
  return (
    <>
      <li key={id}>
        <p>
          {name}: {number}
        </p>
      </li>
    </>
  );
}
