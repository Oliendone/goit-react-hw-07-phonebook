import { v4 as uuidv4 } from 'uuid';

const addContact = (name, number) => ({
  type: 'phonebook/addContact',
  payload: {
    contact: {
      id: uuidv4(),
      name,
      number,
    },
  },
});

const deleteContact = id => ({
  type: 'phonebook/deleteContact',
  payload: {
    id,
  },
});

const filterContacts = filter => ({
  type: 'phonebook/filterContacts',
  payload: {
    filter,
  },
});

export default { addContact, deleteContact, filterContacts };
