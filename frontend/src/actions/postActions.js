export const getAllPosts = () =>
    fetch('/posts')
        .then(res => res.json())