import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import "../assets/css/navbar-styles.css";
import "../assets/css/responsive-nav.css";

export default function SiteNavbar() {
  return (
    <header>
      <Navbar className="header-nav" expand="lg">
        <div className="navbar-header">
          <Navbar.Brand to="/" className="logo">
            My <strong>Project Name</strong>
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="main-menu-wrapper" id="basic-navbar-nav">
          <Nav className="main-nav">
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
            <button className="header-btn">Sign In / Sign Up</button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
