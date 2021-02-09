import React from "react";

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>Sugar Land Web Designer</div>
        <nav>
          <ul className='right-nav'>
            <li className='btn'>
              <a href='/'>Chat now</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
