import React from 'react';

export default function Filter({ value, onChangeFilter }) {
  return (
    <div>
      Find contact by name
      <input type="text" value={value} onChange={onChangeFilter} />
    </div>
  );
}
