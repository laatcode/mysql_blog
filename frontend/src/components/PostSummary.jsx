import { Link } from 'react-router-dom'
import { formatDistance } from 'date-fns'
import {es } from 'date-fns/locale'
import './styles/PostSummary.css'
import { excerpt } from '../tools/formaters'

const PostSummary = ({ post }) => {

    const excerptLength = 600

    return (
        <Link className="post-summary" to={`/posts/${post.id}`}>
            <article>
                <div className="content">
                    <h5 className='title'>{post.title}</h5>
                    <p className='text'>{excerpt(post.content, excerptLength)}</p>
                </div>
                <div className="footer">
                    <span className="user">{post.created_by}</span>
                    <span className="created-at">{formatDistance(new Date(post.created_at), new Date(), { locale: es, addSuffix: true })}</span>
                </div>
            </article>
        </Link>
    )
}

export default PostSummary