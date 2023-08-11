import {  useEffect, useState } from 'react';
import { Div } from './App.styled';
import ContactForm from 'components/ContactForm';
import {ContactList} from 'components/ContactList/ContactList';
import {Filter} from 'components/Filter/Filter';


const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? initialState
  });

  const handelAddContact = (newContact) => 
   setContacts( contacts  => {
      return [...contacts, newContact]
    })
  
    
  useEffect(() => {
  window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  
  const handelCheckUniqueContact = (name) => {
    const isNameContact = !!contacts.find((contact) => contact.name === name)
    isNameContact && alert(`${name} is already in contacts`)
    return !isNameContact
  }

  const handelDelContact = (id) => 
    setContacts(contacts => {
      return contacts.filter(contact => contact.id !== id);
    });
  
  function getVisibleContact() {
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }
 
  return (
      <Div>
   <h1>Phonebook</h1>
     <ContactForm onAdd={handelAddContact} onCheckUnique={handelCheckUniqueContact } />
  <h2>Contacts</h2>
     <Filter filter={filter} onChange={setFilter}/>
     <ContactList contacts={getVisibleContact()} delContact={handelDelContact}/>
         </Div>
  )
  }





