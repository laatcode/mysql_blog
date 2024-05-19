import { Link } from "react-router-dom"
import {LinkContainer} from "react-router-bootstrap"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Container from "react-bootstrap/Container"
import "./styles/Header.css"

const Header = ({ userData, setUserData }) => {
    return (
        <header className="header">
            <Navbar expand="md">
                <Container>
                    <Navbar.Brand>
                        <Link to="/">Blog</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        {userData ?
                        <Nav>
                            <NavDropdown title={`${userData.firstname} ${userData.lastname}`}>
                                <LinkContainer to="/profile">
                                    <NavDropdown.Item>Mi perfil</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>Salir</NavDropdown.Item>
                            </NavDropdown>
                        </Nav> :
                        <Nav>
                            <LinkContainer to="/login">
                                <Link>Iniciar sesión</Link>
                            </LinkContainer>
                            <LinkContainer to="/register">
                                <Link>Registrarse</Link>
                            </LinkContainer>
                        </Nav>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header