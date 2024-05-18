export const getUser = userId =>
    fetch(`/users/${userId}`)
        .then(res => res.json())

export const register = ({firstname, lastname, email, password}) =>
    fetch('/users', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            firstname,
            lastname,
            email,
            password
        })
    }).then(res => res.json())

export const login = ({firstname, lastname, email, password}) =>
    fetch('/auth/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    }).then(res => res.json())
    .then(res => {
        const userData = {
            firstname,
            lastname,
            token: res.token
        }
        sessionStorage.setItem("userData", JSON.stringify(userData))
        return userData
    })