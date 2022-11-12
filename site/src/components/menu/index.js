import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";


function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="menu-sidebar">
      <div value={{ color: "undefined" }}>
        <div className="navbar">
          <Link to="/" className="menu-bars">
            <img className="img-" src="menu-abert.png" alt="" onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="/" className="menu-bars">
                <img className="img-x" src="mais.png" alt=""/>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
