import { getUser } from "./usersActions"

export const getAllPosts = () =>
    fetch('/posts')
        .then(res => res.json())

export const getSinglePost = postId =>
    fetch(`/posts/${postId}`)
        .then(res => res.json())
        .then(async post => {
            const userData = await getUser(post.created_by)
            return {
                ...post,
                created_by: `${userData.firstname} ${userData.lastname}`
            }
        })