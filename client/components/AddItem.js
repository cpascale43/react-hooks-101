import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../store";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleKey = this.handleKey.bind(this);
  }

  handleKey(evt) {
    if (this.state.input === "") return;
    if (evt.key === "Enter") {
      this.props.add(this.state.input);
      this.setState({ input: "" });
    }
  }

  render() {
    return (
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Tasks go here..."
            aria-label="Your items here"
            aria-describedby="button-addon2"
            value={this.state.input}
            onChange={(evt) => this.setState({ input: evt.target.value })}
            onKeyDown={this.handleKey}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-primary"
              type="button"
              id="button-addon2"
              onClick={() => {
                if (this.state.input === "") return;
                this.props.add(this.state.input);
                this.setState({ input: "" });
              }}
            >
              Add Task
            </button>
          </div>
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (text) => dispatch(addItem(text)),
});

export default connect(null, mapDispatchToProps)(AddItem);
