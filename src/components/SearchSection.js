import { Component } from "react";
import "./SearchSection.css";

class SearchSection extends Component {
  render() {
    return (
      <div className="Search-Sec">
        <input type="search" placeholder="places to go, things to do ,hotels" />
      </div>
    );
  }
}

export default SearchSection;
