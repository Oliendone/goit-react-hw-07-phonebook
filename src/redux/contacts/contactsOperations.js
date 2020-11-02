import axios from 'axios';
import contactsActions from './contactsActions';

// axios.defaults.baseURL = 'http://localhost:3001/contacts';

const addContact = (name, number) => dispatch => {
  dispatch(contactsActions.addContactRequest());

  axios
    .post('http://localhost:3001/contacts', { name, number })
    .then(({ data }) => {
      dispatch(contactsActions.addContactSuccess(data));
    })
    .catch(error => dispatch(contactsActions.addContactError(error)));
};

const fetchContacts = () => dispatch => {
  dispatch(contactsActions.fetchContactsRequest());

  axios
    .get('http://localhost:3001/contacts')
    .then(({ data }) => {
      console.log(data);
      dispatch(contactsActions.fetchContactsSuccess(data));
    })
    .catch(error => dispatch(contactsActions.addContactError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(contactsActions.deleteContactRequest());

  axios
    .delete(`http://localhost:3001/contacts/${id}`)
    .then(() => {
      dispatch(contactsActions.deleteContactSuccess(id));
    })
    .catch(error => dispatch(contactsActions.deleteContactError(error)));
};

export default {
  addContact,
  fetchContacts,
  deleteContact,
};
