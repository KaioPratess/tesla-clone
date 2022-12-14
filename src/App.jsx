import { useEffect, useState, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import logo from './assets/svg/logo.svg';
import HomePage from './components/Home';
import Models from './components/productsPage/Models';
import Menu from './components/Menu';
import './styles/App.css';

function App() {
  const [activateMenu, setActivateMenu] = useState(false);
  const header = useRef();
  const footer = useRef();
  const app = useRef();

  useEffect(() => {
    const body = document.querySelector('body');
    if (activateMenu) {
      body.style.overflow = 'hidden';
      header.current.style.paddingRight = '30px';
      footer.current.style.paddingRight = '15px';
      app.current.style.paddingRight = '16px';
    } else {
      header.current.style.paddingRight = '12px';
      footer.current.style.paddingRight = '0px';
      app.current.style.paddingRight = '0';
      body.style.overflow = 'visible';
    }
  }, [activateMenu]);

  return (
    <BrowserRouter>
      <div className="App" ref={app}>
        <header className="header" ref={header}>
          <div className="logo-div">
            <Link to="/tesla-clone/">
              <img src={logo} alt="Tesla Logo" />
            </Link>
          </div>
          <nav className="nav">
            <ul className="nav-products">
              <li>
                <Link to="/tesla-clone/modelS">
                  <span>Model S</span>
                </Link>
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
              <li onClick={() => setActivateMenu(true)}>
                <a>
                  <span>Menu</span>
                </a>
              </li>
            </ul>
          </nav>
        </header>
        {activateMenu && (
          <Menu
            deactivateMenu={() => setActivateMenu(false)}
            isActive={activateMenu}
          />
        )}
        <Routes>
          <Route
            path="/tesla-clone/"
            element={<HomePage activateMenu={activateMenu} />}
          />
          <Route path="/tesla-clone/modelS" element={<Models />} />
        </Routes>
        <footer className="footer" ref={footer}>
          <ul>
            <li>
              <a href="#">Tesla ?? 2022</a>
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
    </BrowserRouter>
  );
}

export default App;
