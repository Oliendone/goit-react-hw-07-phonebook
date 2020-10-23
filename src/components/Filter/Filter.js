import React from 'react';
import PropTypes from 'prop-types';

import s from './Filter.module.css';
import contactsActions from '../../redux/contacts/contactsActions';
import { connect } from 'react-redux';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div className={s.filterWrapper}>
      <p className={s.filterText}>Find contact by name</p>
      <input
        className={s.filterInput}
        type="text"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.filterContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
