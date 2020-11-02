const getFilter = state => state.contacts.filter;

const getContactsItem = state => state.contacts.items;

const getFilteredContacts = state => {
  const items = getContactsItem(state);
  const filter = getFilter(state);

  return items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

export default {
  getFilter,
  getContactsItem,
  getFilteredContacts,
};
