import { createSelector } from '@reduxjs/toolkit';

const getFilter = state => state.contacts.filter;

const getContactsItems = state => state.contacts.items;

const getFilteredContacts = createSelector(
  [getContactsItems, getFilter],
  (items, filter) => {
    return items.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

// const getFilteredContacts = state => {
//   const items = getContactsItems(state);
//   const filter = getFilter(state);

//   return items.filter(item =>
//     item.name.toLowerCase().includes(filter.toLowerCase()),
//   );
// };

export default {
  getFilter,
  getContactsItems,
  getFilteredContacts,
};
