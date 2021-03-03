import React from "react";

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>WWD</div>
        <nav>
          <ul className='right-nav'>
            <li className='btn'>
              <a href="tel:+18324092777">Chat</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
