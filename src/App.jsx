import { useState } from 'react';
import logo from './assets/svg/logo.svg';
import HomePage from './components/Home';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo-div">
          <a href="#">
            <img src={logo} alt="Tesla Logo" />
          </a>
        </div>
        <nav className="nav">
          <ul className="nav-products">
            <li>
              <a href="#">
                <span>Model S</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Model 3</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Model X</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Model Y</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Solar Roof</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Solar Panels</span>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">
                <span>Shop</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Account</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Menu</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <HomePage />
      <footer className="footer">
        <ul>
          <li>
            <a href="#">Tesla © 2022</a>
          </li>
          <li>
            <a href="#">Privacy & Legal</a>
          </li>
          <li>
            <a href="#">Vehicle Recalls</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Engage</a>
          </li>
          <li>
            <a href="#">Locations</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
