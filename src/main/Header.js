// import '../App.css';
import logo from '../img/logo.png';

function Header() {

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    function init() {
        
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }));

        init();

    }
    window.onload = init();

    return (
        <header>
            <div className='conteiner'>
                <nav className='navbar'>

                    <div class="nav-branding">
                        <img src={logo} className='logo'></img>
                        <a href="#">blinkEgor</a>
                    </div>

                    <ul class="nav-menu">
                        <li class="nav-item">
                            <a href="#" class="nav-link">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">About</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">Pages</a>
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