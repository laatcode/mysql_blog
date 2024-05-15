import { useEffect, useState } from "react"
import Loader from "../components/Loader"
import PostSummary from "../components/PostSummary"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { getAllPosts } from "../actions/postActions"

import './styles/HomePage.css'

const HomePage = () => {

    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        if(loading) {
            getAllPosts()
                .then(posts => {
                    setPosts(posts)
                    setLoading(false)
                })
        }
    }, [loading, posts])

    return (
        <section className="home-page">
            <Container>
                <Row>
                    <Col>
                        {loading ? <Loader />
                        : posts.length ?
                        posts.map(post => (
                            <PostSummary key={post.id} post={post} />
                        ))
                        : "No hay post a mostrar"}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HomePage