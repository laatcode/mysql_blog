import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import PostPage from "./pages/PostPage"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import "./App.css"

const App = () => {

    const [userData, setUserData] = useState(sessionStorage.getItem("userData") ? JSON.parse(sessionStorage.getItem("userData")) : null)

    return (
        <BrowserRouter>
            <Header userData={userData} setUserData={setUserData} />
            <main className="main">
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/posts/:id' element={<PostPage />} />
                    <Route path='/register' element={<RegisterPage userData={userData} setUserData={setUserData} />} />
                    <Route path='/login' element={<LoginPage userData={userData} setUserData={setUserData} />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    )
}

export default App;