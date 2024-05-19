import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Loader from "../components/Loader"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { login, register } from "../actions/usersActions"
import "./styles/RegisterPage.css"

const RegisterPage = ({ userData, setUserData }) => {

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

        e.target.firstname.classList.remove("is-invalid")
        e.target.email.classList.remove("is-invalid")
        e.target.password.classList.remove("is-invalid")
        e.target.confirmPassword.classList.remove("is-invalid")

        if(e.target.firstname.value === "") {
            isOk = false
            e.target.firstname.classList.add("is-invalid")
        }

        if(e.target.email.value === "") {
            isOk = false
            e.target.email.classList.add("is-invalid")
        }

        if(e.target.password.value === "") {
            isOk = false
            e.target.password.classList.add("is-invalid")
        }

        if(e.target.password.value !== e.target.confirmPassword.value) {
            isOk = false
            e.target.confirmPassword.classList.add("is-invalid")
        }

        if(isOk) {
            setLoading(true)

            register({
                firstname: e.target.firstname.value,
                lastname: e.target.lastname.value,
                email: e.target.email.value,
                password: e.target.password.value
            }).then(() => login({
                email: e.target.email.value,
                password: e.target.password.value
            })).then(res => {
                setUserData(res)
            })
        }
    }

    return (
        <section className="register-page">
            {loading ? <Loader /> :
            <Container>
                <Row>
                    <Col>
                        <Form className="form" onSubmit={submitHandler}>
                            <h3 className="title">Registrarse</h3>
                            <FloatingLabel label="Nombres">
                                <Form.Control type="text" name="firstname" placeholder="Nombre" autoFocus />
                                <Form.Control.Feedback type="invalid">
                                    Indique un nombre
                                </Form.Control.Feedback>
                            </FloatingLabel>
                            <FloatingLabel label="Apellidos">
                                <Form.Control type="text" name="lastname" placeholder="Apellido" />
                            </FloatingLabel>
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
                            <FloatingLabel label="Confirmar contraseña">
                                <Form.Control type="password" name="confirmPassword" placeholder="Confirmar contraseña" />
                                <Form.Control.Feedback type="invalid">
                                    Las contraseñas no coinciden
                                </Form.Control.Feedback>
                            </FloatingLabel>
                            <div className="buttons">
                                <Button type="submit">Registrarse</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>}
        </section>
    )
}

export default RegisterPage