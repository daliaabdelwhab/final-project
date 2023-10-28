import { Component } from "react";
import "./SecondNavStyles.css";
import { SecondItems } from "./SecondItems";

class SecondNav extends Component {
  state = { clicked: false };
  handelClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div className="SecondNav">
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {SecondItems.map((item, index) => {
            return (
              <li>
                <a className={item.cName} href="/">
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default SecondNav;
