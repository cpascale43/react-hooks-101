import React from "react";

const GroceryItem = ({ onClick, bought, text }) => {
  return (
    <div
      className="row p-3"
      style={{
        display: bought ? "none" : null,
      }}
    >
      <div className="col">
        <li>{text}</li>
      </div>
      <div className="col d-flex justify-content-end">
        <button
          onClick={onClick}
          type="button"
          className="btn btn-danger btn-sm"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default GroceryItem;
