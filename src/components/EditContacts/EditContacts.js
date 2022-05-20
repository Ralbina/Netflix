import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";

const EditContacts = (props) => {
  let [name, setName] = useState(props.editContact.name);
  let [lastName, setLastName] = useState(props.editContact.lastName);
  let [photo, setPhoto] = useState(props.editContact.photo);

  function handleSaveClick() {
    let contact = { ...props.editContact };
    contact.name = name;
    contact.lastName = lastName;
    contact.photo = photo;
    props.handleSaveEditedContact(contact);
    setName("");
    setLastName("");
    setPhoto("");
  }

  return (
    <Modal.Dialog>
      <Modal.Header>Редактировать</Modal.Header>

      <Modal.Body id="modalBody">
        <input
          id="inp1"
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Название фильма"
          value={name}
        />
        <input
          id="inp1"
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Описание"
          value={lastName}
        />
        <input
          id="inp1"
          onChange={(e) => setPhoto(e.target.value)}
          type="text"
          placeholder="URL Фото"
          value={photo}
        />
      </Modal.Body>

      <Modal.Footer>
        <Button id="btnSave" variant="outline-danger" onClick={handleSaveClick}>
          Save
        </Button>
      </Modal.Footer>
    </Modal.Dialog>

    // <div>
    //   <input
    //     onChange={(e) => setName(e.target.value)}
    //     type="text"
    //     placeholder="Name"
    //     value={name}
    //   />
    //   <input
    //     onChange={(e) => setLastName(e.target.value)}
    //     type="text"
    //     placeholder="LastName"
    //     value={lastName}
    //   />
    //   <input
    //     onChange={(e) => setPhoto(e.target.value)}
    //     type="text"
    //     placeholder="URL Photo"
    //     value={photo}
    //   />
    //   <button onClick={handleSaveClick}>Save</button>
    // </div>
  );
};

export default EditContacts;
