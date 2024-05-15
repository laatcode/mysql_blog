import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

const App = () => {
    return (
        <div className="App">
            <Header />
            <section className="content">
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                    </Routes>
                </BrowserRouter>
            </section>
            <Footer />
        </div>
    );
}

export default App;