import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import ContactsList from './components/ContactsList';

const contactsData = contacts.slice(0, 5);

class App extends Component {
  state = {
    contacts: contactsData,
  };
  addContact = () => {
    const newRandomContact =
      contacts[Math.floor(Math.random() * contacts.length)];
    this.setState((state, props) => ({
      contacts: state.contacts.concat(newRandomContact),
    }));
  };

  sortContactNames = () => {
    const sortedNames = [...this.state.contacts]
    sortedNames.sort((a, b) => a.name.localeCompare(b.name));
    this.setState((state, props) => ({
      contacts: sortedNames
     }))
    };

  
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addContact}>Add </button>
        <button onClick={this.sortContactNames}>Sort by names</button>
        <ContactsList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
