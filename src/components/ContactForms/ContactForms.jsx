import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { StyledForm, StyledInput, StyledButton } from './ContactForms.styled';

class ContactForms extends Component {
  state = {
    name: '',
    number: '',
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  uniqueId1 = nanoid();

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmitForm}>
        <label htmlFor={this.uniqueId}>
          Name
          <StyledInput
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            id={this.uniqueId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor={this.uniqueId}>
          Number
          <StyledInput
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
            id={this.uniqueId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    );
  }
}

export default ContactForms;
