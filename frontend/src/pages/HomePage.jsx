import { useEffect, useState } from "react"
import Loader from "../components/Loader"
import PostSummary from "../components/PostSummary"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { getAllPosts } from "../actions/postActions"
import { getUser } from "../actions/usersActions"

import './styles/HomePage.css'

const HomePage = () => {

    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        if(loading) {
            getAllPosts()
                .then(async posts => {
                    const data = await Promise.all(posts.map(post =>
                        getUser(post.created_by)
                            .then(user => ({
                                ...post,
                                created_by: `${user.firstname} ${user.lastname}`
                            }))
                    ))
                    setPosts(data)
                    setLoading(false)
                })
        }
    }, [loading, posts])

    return (
        <section className="home-page">
            {loading ? <Loader />
            : posts.length ?
            <Container>
                <Row>
                    <Col>
                        {posts.map(post => (
                            <PostSummary key={post.id} post={post} />
                        ))}
                    </Col>
                </Row>
            </Container> :
            <div className="empty-post-list">
                <p>No hay post a mostrar</p>
            </div>}
        </section>
    )
}

export default HomePage