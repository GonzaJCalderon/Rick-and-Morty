import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./Nav.module.css"; 

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="nav"> 
        <SearchBar onSearch={this.props.onSearch} />
        <Link to="/about">
          <h3>ABOUT</h3>
        </Link>
        <Link to="/home">
          <h3>HOME</h3>
        </Link>
      </nav>
    );
  }
}

export default Nav;