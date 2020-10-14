import React from 'react';
import PropTypes from 'prop-types';

import s from './Filter.module.css';

export default function Filter({ value, onChangeFilter, isContacts }) {
  return (
    <div className={s.filterWrapper}>
      <p className={s.filterText}>Find contact by name</p>
      <input
        className={s.filterInput}
        type="text"
        value={value}
        onChange={onChangeFilter}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
