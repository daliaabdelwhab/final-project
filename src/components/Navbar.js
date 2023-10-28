import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";

import logo from "/src/images/logo.png";

class Navbar extends Component {
  state = { clicked: false };
  handelClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <img src={logo} className="logo" alt="logo" />

        <h1 className="navbar-logo">Travelia </h1>
        <div className="search-bar">
          <input
            type="search"
            placeholder="places to go, things to do ,hotels"
          />
        </div>
        <div className="menu-icons" onClick={this.handelClick}>
          <i
            className={this.state.clicked ? "fas fa-times " : "fas fa-bars "}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li>
                <a className={item.cName} href="/">
                  {item.title}
                </a>
              </li>
            );
          })}
          <button>Sign In</button>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
