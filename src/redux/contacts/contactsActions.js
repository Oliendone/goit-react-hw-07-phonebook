import { v4 as uuidv4 } from 'uuid';

const addContact = (name, number) => ({
  type: 'phonebook/addContact',
  payload: {task: {
    id: uuidv4(),
    name,
    number,
  }},
});

const deleteContact = id => ({
  type: 'phonebook/deleteContact',
  payload: {
    id,
  },
});

const filterContacts = value => ({
  type: 'phonebook/filterContacts',
  payload: {
    value,
  },
});

default export {addContact, deleteContact, filterContacts};