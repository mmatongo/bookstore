import React from 'react';
import {
  Link,
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <div className="top-containter">
    <div className="nav-title">
      <div className="nav">
        <h1 className="nav-main">Bookstore CMS</h1>
        <nav className="nav-links">
          <ul>
            <li>
              <Link to="/">BOOKS</Link>
            </li>
            <li>
              <Link to="/categories">CATEGORIES</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="avatar">
        <span className="avatar-circle">
          <FontAwesomeIcon icon={faUserAlt} size="lg" color="#0290ff" />
        </span>
      </div>
    </div>
  </div>
);

export default Header;
