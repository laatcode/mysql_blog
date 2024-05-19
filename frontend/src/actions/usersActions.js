import axios from "axios"

export const getUser = userId =>
    axios.get(`/users/${userId}`)
        .then(res => res.data)

export const register = ({firstname, lastname, email, password}) =>
    axios.post('/users', {
        firstname,
        lastname,
        email,
        password
    }).then(res => res.data)

export const login = ({email, password}) =>
    axios.post('/auth/login', {
        email,
        password
    }).then(res => {
        const userData = {
            firstname: res.data.firstname,
            lastname: res.data.lastname,
            token: res.data.token
        }
        sessionStorage.setItem("userData", JSON.stringify(userData))
        return userData
    })
    .catch(error => {
        throw new Error(error.response.data.message)
    })