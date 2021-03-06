import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <header>
        <a id="logo" href ="/">CryptoTA</a>
        <ul id="headerButtons">
          <li className="navButton"><Link to="/graph">Crypto Graph</Link></li>
          <li className="navButton"><Link to="/tutorials">Tutorials</Link></li>
          <li className="navButton"><Link to="/bot">Trading Performance</Link></li>
          <li className="navButton"><Link to="/aboutme">About Me</Link></li>
        </ul>
      </header>
    )
  }
}

export default NavBar;
