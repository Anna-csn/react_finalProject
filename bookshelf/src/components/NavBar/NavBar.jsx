import logo from './logo48.png';
import CartWidget from './../CartWidget/CartWidget';
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import React from 'react';
import { Container, Nav, Navbar, Dropdown, Form, InputGroup, Image, Button } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';

function NavBar({theme = 'dark'}) {
    return (
        <>
            <Navbar bg={theme} data-bs-theme={theme} sticky='top' >
                <Container>
                    <Navbar.Brand href="#home">
                        <Image className='me-3' rounded src={logo} alt='Página Inicial' /> Bookshelf
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Item>
                            <InputGroup>
                                <InputGroup.Text id="searchBox">
                                    <Search color='orange' />
                                </InputGroup.Text>
                                <Form.Control
                                    placeholder="Pesquisar"
                                    aria-label="search"
                                    aria-describedby="search-box"
                                />
                            </InputGroup>
                        </Nav.Item>
                        <Nav.Item>
                            <Dropdown data-bs-theme={theme}>
                                <Dropdown.Toggle variant={theme}>Categorias</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/acao">Ação</Dropdown.Item>
                                    <Dropdown.Item href="#/romance">Romance</Dropdown.Item>
                                    <Dropdown.Item href="#/sifi">Si-Fi</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#/mais">Mais</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Item>
                        <Nav.Item>
                            <Button className='Gradient-btn'>Login</Button>
                        </Nav.Item>
                        <Nav.Item>
                            <CartWidget />
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;