import './App.css';
import logo from './assets/logo.svg';
import iconyoga from './assets/icon-yoga.svg';
import iconswim from './assets/icon-swim.png';
import iconbike from './assets/icon-bike.svg';
import iconmuscu from './assets/icon-muscu.svg';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <header>
        <div className='logo'>
          <img src={logo} alt="Logo" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Accueil</a>
            </li>
            <li>
              <a href="#">Profil</a>
            </li>
            <li>
              <a href="#">Réglage</a>
            </li>
            <li>
              <a href="#">Communauté</a>
            </li>
          </ul>
        </nav>
      </header>
      <aside>
        <div className='icons-container'>
          <img src={iconyoga} alt="icon yoga" />
          <img src={iconswim} alt="icom piscine" />
          <img src={iconbike} alt="icon velo" />
          <img src={iconmuscu} alt="icon musculation" />
        </div>
      </aside>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;

