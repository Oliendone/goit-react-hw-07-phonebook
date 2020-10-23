import { combineReducers } from 'redux';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case 'phonebook/addContact':
      return [...state, payload.contact];

    case 'phonebook/deleteContact':
      return state.filter(item => item.id !== payload.id);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case 'phonebook/filterContacts':
      return payload.filter;

    default:
      return state;
  }
};

export default combineReducers({ items, filter });

// changeFilter = filter => {
//   this.setState({ filter: filter.target.value });
// };

// getFilteredTasks = () => {
//   const { filter, contacts } = this.state;

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase()),
//   );
// };
