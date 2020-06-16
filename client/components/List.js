import React from "react";
import { connect } from "react-redux";
import { toggleItem } from "../store";
import Item from "./Item";

const ShoppingList = (props) => (
  <ul className="list-group list-group-flush">
    {props.items.map((item) => (
      <Item
        key={item.id}
        {...item}
        onClick={() => props.toggleItem(item.id)}
      />
    ))}
  </ul>
);

const mapStateToProps = (state) => ({ items: state.items });

const mapDispatchToProps = (dispatch) => ({
  toggleItem: (id) => dispatch(toggleItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
