import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { StyledForm, StyledInput, StyledButton } from './ContactForms.styled';

const ContactForms = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // const handleInputChangeName = event => {
  //   setName(event.target.value);
  // };

  // const handleInputChangeNumber = event => {
  //   setNumber(event.target.value);
  // };
  // для замены onChange на каждый стейт, можно использовать switchб не забыть
  // переменные свитч - это строка!!!
  const uniqueId = nanoid();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`Тип поля name -${name} не обрабатывается`);
    }
  };

  const handleSubmitForm = event => {
    event.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <StyledForm onSubmit={handleSubmitForm}>
      <label htmlFor={uniqueId}>
        Name
        <StyledInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          id={uniqueId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor={uniqueId}>
        Number
        <StyledInput
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          id={uniqueId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <StyledButton type="submit">Add contact</StyledButton>
    </StyledForm>
  );
};

export default ContactForms;
