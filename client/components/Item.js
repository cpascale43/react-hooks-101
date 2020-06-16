import React from "react";

const GroceryItem = ({ onClick, bought, text }) => (
  <li
    className="list-group-item"
    onClick={onClick}
    style={{
      textDecoration: bought ? "line-through" : "none"
    }}>
    {text}
  </li>
);

export default GroceryItem;
