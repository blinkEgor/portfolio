import './App.css';
import logo from './img/logo.png';

function App() {
  return (
    <header>
      <div className='logo'>
        <img src={logo}></img>
        <p>blinkEgor</p>
      </div>
      <nav>
        <p><a href='./App'>Home</a></p>
        <p><a href=''>Layout</a></p>
      </nav>
    </header>
  );
}

export default App;
