import React from "react";

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
      <nav>
          <ul className='right-nav'>
            <li className='btn'>
              <a href="tel:+18324092777">Call</a>
            </li>
          </ul>
        </nav>
        <div className='logo'>Swaygo</div>
        
      </div>
    </header>
  );
}
