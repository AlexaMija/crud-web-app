import React from 'react';
import './App.css';
import { ContactForm } from './component/contactForm/ContactForm';
import { ContactListItem } from './component/contactListItem/ContactListItem';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';
function App() {
  const [contacts, setContacts] = useLocalStorage("contacts",[]);

  const addContact = contact => {
  setContacts([...contacts, contact]);
 
}
  const deleteContact = contact =>{
    setContacts(contacts.filter(contactItem => contactItem.id !== contact.id))
  
  }

  return (
    <div className="wrapper">
      <ContactForm addContactProp ={addContact} /> 
     {
      contacts.map(contact => <ContactListItem key={ contact.id } item={ contact } deleteContactProp={ deleteContact} />)
     }
    </div>
  );
}

export default App;
