import React, { Component } from 'react';

export default class Song extends Component {
  state = {
    songTitle: ''
  };

  componentDidMount() {
    this.parseQueryParams();
  }

  componentDidUpdate() {
    this.parseQueryParams();
  }

  parseQueryParams() {
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
      if (this.state.songTitle !== param[1]) {
        this.setState({ songTitle: param[1] });
      }
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.songTitle}</h1>
        <p>Reference No: {this.props.match.params.id}</p>
      </div>
    );
  }
}
