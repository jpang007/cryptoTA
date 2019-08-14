import React, { Component } from 'react';
import Iframe from 'react-iframe'

class bot extends Component {
  render() {
    return (
      <table className = "iframecontainerbot">
        <Iframe url="https://pangjeremy.pythonanywhere.com/backtest"
        position="relative"
        height="100%"
        width="100%"
        id="myGraph"
        styles={{overflow:"hidden"}}
        />
      </table>
    )
  }
}

export default bot;
