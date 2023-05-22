import { Link, NavLink } from "react-router-dom";

import "../assets/css/navbar-styles.css";
import "../assets/css/responsive-nav.css";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-header-lg header-nav">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand logo">
            <h3>
              My <strong>Project Name</strong>
            </h3>
          </Link>
        </div>
        <div className="main-menu-wrapper">
          <ul className="main-nav">
            <li className="active">
              <NavLink to="#page1">Page 1</NavLink>
            </li>
            <li className="has-submenu">
              <NavLink to="#page2">Page 2</NavLink>
              <ul className="submenu">
                <li>
                  <NavLink to="#page2/#sub-page2">Sub Page 2</NavLink>
                </li>
                <li>
                  <NavLink to="#page2/#sub-page3">Sub Page 3</NavLink>
                </li>
                <li>
                  <NavLink to="#page2/#sub-page3">Sub Page 3</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#page3">Page 3</NavLink>
            </li>
            <li>
              <NavLink to="#page4">Page 4</NavLink>
            </li>
            <Link to="#login">
              <button className="header-btn">Sign In / Sign Up</button>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}
