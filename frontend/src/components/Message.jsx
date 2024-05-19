import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Alert from "react-bootstrap/Alert"

const Message = ({ variant = "info", children }) => (
    <Row>
        <Col>
            <Alert variant={variant} className="text-center">
                {typeof children === "string" && children.includes(".") ?
                children.split(".").map(message => <span className="d-block">{message}</span>)
                : children}
            </Alert>
        </Col>
    </Row>
)

export default Message