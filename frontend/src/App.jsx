import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import PostPage from "./pages/PostPage"
import "./App.css"

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <main className="main">
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/posts/:id' element={<PostPage />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    )
}

export default App;