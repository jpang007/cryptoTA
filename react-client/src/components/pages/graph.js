import React, { Component } from 'react';
import Iframe from 'react-iframe'

class graph extends Component {
  render() {
    return (
      <div>
        <p> First load time might be slow... Thanks for waiting :) </p>
        <Iframe url="https://cryptota.herokuapp.com"
        height="1200px"
        width="100%"
        id="myGraph"
        display="initial"
        position="relative"
        allowFullScreen/>
      </div>
    )
  }
}

export default graph;
