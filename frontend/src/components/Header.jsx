import { Link } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "./styles/Header.css"

const Header = () => {
    return (
        <header className="header">
            <Container>
                <Row>
                    <Col>
                        <div className="left">
                            <Link to="/">Blog</Link>
                        </div>
                        <div className="right">
                            <nav className='menu'>
                                <ul>
                                    <li>
                                        <Link to="/login">Iniciar sesión</Link>
                                    </li>
                                    <li>
                                        <Link to="/register">Registrarse</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header