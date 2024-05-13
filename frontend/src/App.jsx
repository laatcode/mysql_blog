import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="App">
            <Header />
            <section className="content">
                Contenido
            </section>
            <Footer />
        </div>
    );
}

export default App;