import { Link } from 'react-router-dom'
import './styles/Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="left">
                <Link to="/">Blog</Link>
            </div>
            <div className="right">
                <nav className='menu'>
                    <ul>
                        <li>
                            <Link to="/login">Iniciar sesión</Link>
                        </li>
                        <li>
                            <Link to="/register">Registrarse</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header