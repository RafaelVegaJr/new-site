import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";
import { useAuth0 } from "@auth0/auth0-react"; // <-- Add this import

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0(); // <-- Add this hook

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            CDR <i className="fas fa-bicycle" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>

            {/* Add Auth buttons */}
            {!isAuthenticated && (
              <li className="nav-item">
                <Link to="#" className="nav-links" onClick={loginWithRedirect}>
                  Log In
                </Link>
              </li>
            )}

            {isAuthenticated && (
              <li className="nav-item">
                <Link
                  to="#"
                  className="nav-links"
                  onClick={() => logout({ returnTo: window.location.origin })}
                >
                  Log Out
                </Link>
              </li>
            )}

            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button &&
            !isAuthenticated && ( // <-- Modify this to show button only if not authenticated
              <Button buttonStyle="btn--outline" to="/sign-up">
                Sign Up
              </Button>
            )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
