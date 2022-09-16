import { useEffect, useRef } from 'react';

function Menu(props) {
  const menu = useRef();

  return (
    <div
      className="menu-bg"
      onClick={() => {
        menu.current.classList.add('fade-out-right');
        setTimeout(() => {
          props.deactivateMenu();
        }, 250);
      }}
    >
      <section className="menu fade-in-right2" ref={menu}>
        <div
          className="close-menu"
          onClick={() => {
            menu.current.classList.add('fade-out-right');
            setTimeout(() => {
              props.deactivateMenu();
            }, 250);
          }}
        >
          <div>
            <svg
              className="tds-icon tds-icon-close tds-modal-close-icon"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
            >
              <path d="M18.53 17.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.748.748 0 0 1-1.06 0 .75.75 0 0 1 0-1.06L10.94 12 5.47 6.53a.75.75 0 1 1 1.06-1.06L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47z" />
            </svg>
          </div>
        </div>
        <ul>
          <li>
            <a href="#">Existing Inventory</a>
          </li>
          <li>
            <a href="#">Used Inventory</a>
          </li>
          <li>
            <a href="#">Trade-In</a>
          </li>
          <li>
            <a href="#">Test Drive</a>
          </li>
          <li>
            <a href="#">Insurance</a>
          </li>
          <li>
            <a href="#">Cybertruck</a>
          </li>
          <li>
            <a href="#">Roadster</a>
          </li>
          <li>
            <a href="#">Semi</a>
          </li>
          <li>
            <a href="#">Charging</a>
          </li>
          <li>
            <a href="#">Powerwall</a>
          </li>
          <li>
            <a href="#">Commercial Energy</a>
          </li>
          <li>
            <a href="#">Utilities</a>
          </li>
          <li>
            <a href="#">Find Us</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Investor Relations</a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Menu;
