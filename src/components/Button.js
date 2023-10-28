import React from "react";
import "./Button.css";

function Button(props) {
  const { children, style } = props;
  return (
    <button
      className="btn"
      style={style ? style : { background: "#51B871", color: "#fff" }}
    >
      {" "}
      {children}{" "}
    </button>
  );
}

export default Button;
