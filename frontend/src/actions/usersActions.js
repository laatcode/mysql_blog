export const getUser = userId =>
    fetch(`/users/${userId}`)
        .then(res => res.json())