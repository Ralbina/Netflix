import React, { useState } from "react";
import "./AddContact.css";
const AddContact = (props) => {
  // props что бы отправить
  let [name, setName] = useState("");
  let [lastName, setLastName] = useState("");
  let [photo, setPhoto] = useState("");
  //  сохраняем стейты

  function handleClick() {
    let newContact = {
      name,
      lastName,
      photo,
      id: Date.now(),
    };
    //  объект что бы сохранять все значение в массив
    props.handleNewContact(newContact);
    //  отправляю в родительский app.js newContact
    setName("");

    setLastName("");
    setPhoto("");
  }

  return (
    <div className="inpAll">
      <input
        className="inp"
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Название фильма"
        value={name}
      />
      <input
        className="inp"
        onChange={(e) => setLastName(e.target.value)}
        // значение инпута
        type="text"
        placeholder="Описание"
        value={lastName}
      />
      <input
        className="inp"
        onChange={(e) => setPhoto(e.target.value)}
        type="url"
        placeholder="URL Photo"
        value={photo}
      />

      <button
        id="btnAdd"
        className=" btn-outline-danger  "
        onClick={handleClick}
      >
        Добавить фильм
      </button>
    </div>
  );
};

export default AddContact;
