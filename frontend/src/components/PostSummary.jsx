import { Link } from 'react-router-dom'
import './styles/PostSummary.css'

const PostSummary = ({ post }) => {
    return (
        <Link className="post-summary" to={`/posts/${post.id}`}>
            <article>
                <h5 className='title'>{post.title}</h5>
                <p className='content'>{post.content}</p>
            </article>
        </Link>
    )
}

export default PostSummary