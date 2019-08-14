import React, { Component } from 'react';
import Iframe from 'react-iframe'

class graph extends Component {
  render() {
    return (
      <table className = "iframecontainer">
          <Iframe url="https://pangjeremy.pythonanywhere.com/"
          position="relative"
          height="100%"
          width="100%"
          scrolling="No"
          styles={{overflow:"hidden"}}
          id="myGraph"/>
      </table>
    )
  }
}

export default graph;
