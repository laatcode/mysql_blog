import './styles/Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="left">
                <a href="/">Blog</a>
            </div>
            <div className="right">
                <nav className='menu'>
                    <ul>
                        <li>
                            <a href="/login">Iniciar sesión</a>
                        </li>
                        <li>
                            <a href="/register">Registrarse</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header