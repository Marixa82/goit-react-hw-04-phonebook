import { Component } from 'react';
import { Div } from './App.styled';
import ContactForm from 'components/ContactForm';
import {ContactList} from 'components/ContactList/ContactList';
import {Filter} from 'components/Filter/Filter';


export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
    
  }
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts)
    if (parsedContacts) {
      this.setState({contacts : parsedContacts})
    }
      }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }
  handelAddContact = ( newContact ) =>
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact]
    }))
    
  handelCheckUniqueContact = (name) => {
    const { contacts } = this.state
    const isNameContact = !!contacts.find((contact) => contact.name === name)
    isNameContact && alert (`${name} is already in contacts`)  
    return !isNameContact

  }
  handelDelContact = (id) => 
    this.setState(({ contacts }) => ({
    contacts: contacts.filter((contact) => contact.id !== id)
  }))

  handelFilterChange = (filter) => {
    this.setState({filter})
  }
  getVisibleContact = () => {
    const { contacts, filter } = this.state
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
  }
      
  render() {
    const { filter } = this.state
    const visibleContacts = this.getVisibleContact()
  return (
      <Div>
   <h1>Phonebook</h1>
     <ContactForm onAdd={this.handelAddContact} onCheckUnique={this.handelCheckUniqueContact } />
  <h2>Contacts</h2>
     <Filter filter={filter} onChange={this.handelFilterChange}/>
     <ContactList contacts={visibleContacts} delContact={this.handelDelContact}/>
         </Div>
  )
  }
  
    
}

