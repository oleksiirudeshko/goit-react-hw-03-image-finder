import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Button extends Component {
  render() {
    return (
      <button className="LoadMoreBtn" onClick={this.props.onClick}>
        load more
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
