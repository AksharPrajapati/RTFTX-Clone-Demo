import React from "react";
import '../Styles/header.scss'

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>LOGO</div>
        <nav>
          <ul>
            <li className='btn'>
              <a href='/'>order</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
