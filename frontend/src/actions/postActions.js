import axios from "axios"
import { getUser } from "./usersActions"

export const getAllPosts = () =>
    axios.get('/posts')
        .then(res => res.data)

export const getSinglePost = postId =>
    axios.get(`/posts/${postId}`)
        .then(res => res.data)
        .then(async post => {
            const userData = await getUser(post.created_by)
            return {
                ...post,
                created_by: `${userData.firstname} ${userData.lastname}`
            }
        })