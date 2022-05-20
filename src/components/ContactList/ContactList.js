import React from "react";
import { Button, ButtonToolbar, Card } from "react-bootstrap";
import "./ContactList.css";

const ContactList = (props) => {
  return (
    <div className="contactListCards">
      {props.contacts.map((item, index) => (
        // <ul key={item.id}>
        //   {/*  cоздаем key для индивидуального id */}
        //   <li>{item.name}</li>
        //   <li>{item.lastName}</li>
        //   <img src={item.photo} alt="photo" className="imgContact" />
        //   <li>
        //     <button onClick={() => props.handleDeleteContact(item.id)}>
        //       Delete
        //     </button>
        //     <button onClick={() => props.handleEditIndex(index)}>Edit</button>
        //   </li>
        // </ul>
        <Card id="card" style={{ width: "18rem" }} key={item.id}>
          <Card.Img variant="top" src="{item.photo}" />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.lasName}</Card.Text>
            <Button
              className="btnDelete"
              onClick={() => props.handleDeleteContact(item.id)}
              variant="outline-danger"
            >
              Delete
            </Button>
            <Button
              onClick={() => props.handleEditIndex(index)}
              variant="outline-danger"
            >
              Edit
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ContactList;
