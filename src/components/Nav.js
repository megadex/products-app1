import React from 'react';
import '../App.css';
import {Link, NavLink} from 'react-router-dom';

function Nav() {
  return (
    <nav className="header">
      <div className="wrapper">
        <div className="headerbox">
          <ul className="menubar">
            <li className="menubar__item">
              <NavLink to="/" activeClassName="active">Main</NavLink>
            </li>

            <li className="menubar__item">
              <Link to="/cart" className="selected current">Cart</Link>
            </li>
            <li className="menubar__item">
              <Link to="/edit">Link</Link>
            </li>
          </ul>
          <div className="user">
            <span className="user__icon"></span>
            <span className="user__enter">Вход</span>
          </div>
        </div>
        <div className="burger">
          <span className="burger__lines"></span>
        </div>
      </div>
    </nav>
  );
}

export default Nav;