import './App.css';
import logo from './img/logo.png';

function App() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  {
    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }));
  }
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

          <div className='hamburger' onClick={() => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
          }}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>

        </nav>
      </div>
    </header>
  );
}

export default App;