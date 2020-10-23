import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import WarningMessage from '../WarningMessage/WarningMessage';

import contactsActions from '../../redux/contacts/contactsActions';
import s from './ContactForm.module.css';
import { connect } from 'react-redux';
import warning from '../WarningMessage/appearMessage.module.css';
import warningMessageActions from '../../redux/warning/warningMessageActions';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.number,
  };

  state = { ...INITIAL_STATE };

  handleChangeInput = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  reset = () => {
    return {
      name: '',
      number: '',
    };
  };

  handleSubmit = e => {
    e.preventDefault();

    const isInContacts = this.props.contacts.find(contact => {
      return contact.name.toLowerCase() === this.state.name.toLowerCase();
    });

    const contactWarning = 'Contact already exist!';
    const numberWarning = 'Please, write a number.';

    if (isInContacts) {
      this.props.warningMessageOn(contactWarning);

      setTimeout(() => this.props.warningMessageOff(contactWarning), 3000);
    } else if (this.state.number === '') {
      this.props.warningMessageOn(numberWarning);

      setTimeout(() => this.props.warningMessageOff(numberWarning), 3000);
    } else {
      this.props.onAddContact(this.state.name, this.state.number);

      this.setState(this.reset());
    }
  };

  render() {
    const { name, number } = this.state;

    return (
      <>
        <form className={s.phoneBookForm} onSubmit={this.handleSubmit}>
          <label>
            <p className={s.contactName}>Name</p>
            <input
              className={s.nameInput}
              type="text"
              value={name}
              onChange={this.handleChangeInput}
              name="name"
              autoComplete="off"
            />
          </label>
          <label>
            <p className={s.contactNumber}>Number</p>
            <input
              className={s.numberInput}
              type="phone"
              value={number}
              onChange={this.handleChangeInput}
              name="number"
              autoComplete="off"
            />
          </label>
          <button className={s.addButton} type="submit">
            Add contact
          </button>
        </form>

        <CSSTransition
          in={this.props.isWarningMessage}
          classNames={warning}
          timeout={250}
          unmountOnExit
        >
          <WarningMessage messageText={this.props.warningMessageText} />
        </CSSTransition>
      </>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.items,
  isWarningMessage: state.message.warningMessage.pushWarningMessage,
  warningMessageText: state.message.warningMessage.text,
});

const mapDispatchToProps = {
  onAddContact: contactsActions.addContact,
  warningMessageOn: warningMessageActions.showMessage,
  warningMessageOff: warningMessageActions.hideMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
