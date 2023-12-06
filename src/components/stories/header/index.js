import React from "react";
import "./header.css";
import { appTitle } from "../../../config";
import Link from '../../stories/links'

const Header = () => {
  const handelLogout = () =>{
    localStorage.clear();
    window.location.href= "/";
  }

  return (
    <header className="header">
      <div className="container">
        <nav
          data-mdb-navbar-init
          className="navbar navbar-expand-lg navbar-light"
        >
          <a className="navbar-brand Logo_title" href="/home">
            {appTitle}
          </a>

          <div className="collapse navbar-collapse" id="navbarExample01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <Link link = "/home" label="Home"/>
              </li>
            </ul>
            <div className="form-inline">
               <a onClick={handelLogout}>Logout</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
