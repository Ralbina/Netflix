import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import "./Navbar.css";

const NavigationBar = () => {
  return (
    <Navbar className="navbarAll" bg="black" expand="lg">
      <Container fluid>
        <Navbar.Brand className="brand" href="#">
          {" "}
          NETFLIX{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="film" href="#action1">
              Главная
            </Nav.Link>
            <Nav.Link className="film" href="#action2">
              Сериалы
            </Nav.Link>
            <Nav.Link className="film" href="#action2">
              Фильмы
            </Nav.Link>
            <Nav.Link className="film" href="#action2">
              Мой список
            </Nav.Link>
            <Nav.Link className="film" href="#action2">
              Последние
            </Nav.Link>
            <NavDropdown title="Жанр" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Ужасы</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Фантастика</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Романтика</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Хоррор</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Детектив</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Криминал</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Европейское кино
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Все жанры</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="film" href="#" disabled>
              Жанр
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Поиск"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Поиск</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
