import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import './App.css'

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <section className="content">
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                    </Routes>
                </section>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;