import React, { Component } from 'react';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeInput = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddContact(this.state.name, this.state.number);

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              value={name}
              onChange={this.handleChangeInput}
              name="name"
              autoComplete="off"
            />
          </label>
          <label>
            Number
            <input
              type="phone"
              value={number}
              onChange={this.handleChangeInput}
              name="number"
            />
          </label>
          <button type="submit" onClick={this.addContact}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}
