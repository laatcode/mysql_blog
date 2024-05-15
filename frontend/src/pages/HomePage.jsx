import { useEffect, useState } from "react"
import { getAllPosts } from "../actions/postActions"
import Loader from "../components/Loader"
import PostSummary from "../components/PostSummary"

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
            {loading ? <Loader />
            : posts.length ?
            posts.map(post => (
                <PostSummary key={post.id} post={post} />
            ))
            : "No hay post a mostrar"}
        </section>
    )
}

export default HomePage