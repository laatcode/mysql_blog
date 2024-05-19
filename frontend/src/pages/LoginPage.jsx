import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Loader from "../components/Loader"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Button from "react-bootstrap/Button"
import { login } from "../actions/usersActions"
import "./styles/LoginPage.css"

const LoginPage = ({ userData, setUserData }) => {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if(userData) {
            navigate("/")
        }
    }, [userData, navigate])

    const submitHandler = e => {
        e.preventDefault()

        let isOk = true

        e.target.email.classList.remove("is-invalid")
        e.target.password.classList.remove("is-invalid")

        if(e.target.email.value === "") {
            isOk = false
            e.target.email.classList.add("is-invalid")
        }

        if(e.target.password.value === "") {
            isOk = false
            e.target.password.classList.add("is-invalid")
        }

        if(isOk) {
            setLoading(true)

            login({
                email: e.target.email.value,
                password: e.target.password.value
            }).then(res => {
                setUserData(res)
            })
        }

    }

    return (
        <section className="login-page">
            {loading ? <Loader /> :
            <Container>
                <Row>
                    <Col>
                        <Form className="form" onSubmit={submitHandler}>
                            <h3 className="title">Iniciar sesión</h3>
                            <FloatingLabel label="Correo electrónico">
                                <Form.Control type="email" name="email" placeholder="Correo electrónico" />
                                <Form.Control.Feedback type="invalid">
                                    Indique un correo electrónico válido
                                </Form.Control.Feedback>
                            </FloatingLabel>
                            <FloatingLabel label="Contraseña">
                                <Form.Control type="password" name="password" placeholder="Contraseña" />
                                <Form.Control.Feedback type="invalid">
                                    Indique una contraseña
                                </Form.Control.Feedback>
                            </FloatingLabel>
                            <div className="buttons">
                                <Button type="submit">Iniciar sesión</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>}
        </section>
    )
}

export default LoginPage