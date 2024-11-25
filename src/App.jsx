import './App.css';
import logo from './assets/logo.svg';
import iconyoga from './assets/icon-yoga.svg';
import iconswim from './assets/icon-swim.png';
import iconbike from './assets/icon-bike.svg';
import iconmuscu from './assets/icon-muscu.svg';
import { Link, Outlet, useHref } from 'react-router-dom';

function App() {
  const href= useHref()
  
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
      <div className="dashboard-container">
        <aside>
          <div className='icons-container'>
            <img src={iconyoga} alt="icon yoga" />
            <img src={iconswim} alt="icom piscine" />
            <img src={iconbike} alt="icon velo" />
            <img src={iconmuscu} alt="icon musculation" />
          </div>
          <div className='copyright'>
            <p>Copiryght, SportSee 2020</p>
          </div>
        </aside>
        <main>
          <Outlet/>
        </main>
      </div>      
    </>
  );
}

export default App;

