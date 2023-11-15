// import '../App.css';
import logo from '../img/logo.png';

function Header() {

    

    return (
        <header>
            <div className='conteiner'>
                <nav className='navbar'>

                    <div className='nav-branding'>
                        <img src={logo} className='logo' alt='logo'></img>
                        <a href='../App.js'>blinkEgor</a>
                    </div>

                    <ul className='nav-menu'>
                        <li className='nav-item'>
                            <a href='../App.js' className='nav-link'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a href='../App.js' className='nav-link'>About</a>
                        </li>
                        <li className='nav-item'>
                            <a href='../App.js' className='nav-link'>Contact</a>
                        </li>
                        <li className='nav-item'>
                            <a href='../App.js' className='nav-link'>Pages</a>
                        </li>
                    </ul>

                    <div className='hamburger'>
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </div>

                </nav>
            </div>
        </header>
    )
}

export default Header;