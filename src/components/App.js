import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import ContactList from './ContactList'
import AddContact from './AddContact'

function App() {
  const [contacts, setContacts] = useState([]);
  // const contacts = [
  //   {
  //     id: "1",
  //     name: "Arjun",
  //     email: "arjunmpoduval@gmail.com"
  //   },
 
  // ];
  const LOCAL_STORAGE_KEY = "contacts";
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  }; 
  //--> the contact will be fetched from child component Addcontact, using props
  //method as props

  useEffect(() => {
   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)));
   if(retriveContacts) setContacts(retriveContacts);
  },[contacts]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);

  return (
       <div>
          <Header />
          <AddContact addContactHandler={addContactHandler} />
          <ContactList contacts={contacts}  />
      </div>
  );
}

export default App;
