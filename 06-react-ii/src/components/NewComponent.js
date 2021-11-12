import React, { Component } from "react";

import axios from "axios";

export default class NewComponent extends Component {
  state = {
    count: 0,
    isLoading: true,
    data: [],
  };
  async componentDidMount() {
    let res = await axios.get("udbdj");
    this.setState({ data: res.data, isLoading: false });
  }
  render() {
    return (
      <button
        onClick={() => {
          this.setState({ count: this.state.count + 1 });
        }}
      >
        Class Based Component - {this.state.count}
      </button>
    );
  }
}
