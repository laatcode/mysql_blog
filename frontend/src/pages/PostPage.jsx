import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loader from "../components/Loader"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { getSinglePost } from "../actions/postActions"
import "./styles/PostPage.css"
import { formatDistance } from "date-fns"
import { es } from "date-fns/locale"

const PostPage = () => {

    const params = useParams()
    const [loading, setLoading] = useState(true)
    const [post, setPost] = useState(null)

    useEffect(() => {
        if(loading) {
            getSinglePost(params.id)
                .then(res => {
                    setPost(res)
                    setLoading(false)
                })
        }
    }, [loading, params])

    return (
        <section className="post-page">
            {loading ? <Loader /> :
            <Container>
                <Row className="header">
                    <Col>
                        <h2>{post.title}</h2>
                        <span>Publicado por {post.created_by} {formatDistance(post.created_at, new Date(), { addSuffix: true, locale: es })}</span>
                    </Col>
                </Row>
                <Row className="content">
                    <Col>
                        <p>{post.content}</p>
                    </Col>
                </Row>
            </Container>}
        </section>
    )
}

export default PostPage