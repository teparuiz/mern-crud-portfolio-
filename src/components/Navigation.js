import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <nav className="cyan
      ">
        <div className="collapse navbar-collapse">
          <ul>
            
          <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            
            <li className="nav-item active">
              <Link to="/show-list" className="nav-link">
                Show List
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
