import "./App.css";

import React, { useState } from "react";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";
import EditContacts from "./components/EditContacts/EditContacts";
import NavigationBar from "./components/NavBar/Navbar";

const App = () => {
  let [contacts, setContacts] = useState([]);
  // используем вместо db.json
  let [editContact, setEditContact] = useState({});
  let [isEdit, setIsEdit] = useState(false);

  function handleNewContact(newContact) {
    let newContactsArray = [...contacts];
    //  скопировали все данны потом изменили их потом изменненный массив пушим обрптно
    //распаковываем массив (для того что бы не изменялость lastname когда исправляем name)
    newContactsArray.push(newContact);
    // подставляем в новый массив
    setContacts(newContactsArray);
  }

  function handleDeleteContact(id) {
    let newContactsArray = contacts.filter((item) => {
      return item.id !== id;
    });
    setContacts(newContactsArray);
    //  set contacts у нас асинхронный
  }

  function handleEditIndex(index) {
    setIsEdit(true);
    setEditContact(contacts[index]);
  }

  function handleSaveEditedContact(newContact) {
    let newContactsArray = contacts.map((item) => {
      if (item.id === newContact.id) {
        return newContact;
      }
      return item;
    });

    setContacts(newContactsArray);
    setIsEdit(false);
  }

  return (
    <div className="App">
      <NavigationBar />
      <AddContact handleNewContact={handleNewContact} />
      {/* handleNewContact-это название={handleNewContact а это реальная ф-я*/}
      {isEdit ? (
        <EditContacts
          editContact={editContact}
          handleSaveEditedContact={handleSaveEditedContact}
        />
      ) : null}

      <ContactList
        contacts={contacts}
        handleDeleteContact={handleDeleteContact}
        handleEditIndex={handleEditIndex}
      />
    </div>
  );
};

export default App;
