import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { StyledAppWrapper } from 'App.styled';
import ContactForms from './ContactForms/ContactForms';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const KEY_CONTACTS = 'contacts';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(KEY_CONTACTS, JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem(KEY_CONTACTS);
    const savedContacts = JSON.parse(contacts);

    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }

  formSubmitData = data => {
    const { contacts } = this.state;
    const isDuplicateName = contacts.some(contacts =>
      contacts.name.toLowerCase().includes(data.name.toLowerCase())
    );

    if (isDuplicateName) {
      alert(`${data.name} is alredy to contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...data, id: nanoid() }],
    }));
  };

  changeFilterData = event => {
    const { value } = event.currentTarget;
    this.setState({ filter: value });
  };

  renderFilterContacts = () => {
    const { filter, contacts } = this.state;
    const normalized = filter.toLowerCase();

    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(normalized)
    );
  };

  deleteContact = deleteContactID => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== deleteContactID
      ),
    }));
  };

  render() {
    return (
      <>
        <StyledAppWrapper>
          <h1>Phonebook</h1>
          <ContactForms onSubmit={this.formSubmitData} />
          <h2>Contacts</h2>
          <Filter value={this.state.filter} onChange={this.changeFilterData} />
          <ContactList
            dataUsers={this.renderFilterContacts()}
            deleteContact={this.deleteContact}
          />
        </StyledAppWrapper>
      </>
    );
  }
}

export default App;
