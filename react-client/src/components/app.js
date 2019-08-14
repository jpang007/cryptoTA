import React, { Component } from 'react';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import { Switch, browserHistory } from 'react-router';
import HomePage from './pages/homePage.js';
import graph from './pages/graph.js';
import tutorials from './pages/tutorials.js';
import blog from './pages/blog.js';
import bot from './pages/bot.js';
import aboutMe from './pages/aboutme.js';
import NoMatch from './pages/NoMatch.js';
import RSI from './pages/Tutorials/RSI.js';
import BB from './pages/Tutorials/BB.js';
import MACD from './pages/Tutorials/MACD.js';
import RSIS from './pages/Tutorials/RSIS.js';
import BCT from './pages/Tutorials/BCT.js';
import EMA from './pages/Tutorials/EMA.js';
import Bitcoin from './pages/Tutorials/Bitcoin.js';
import Ethereum from './pages/Tutorials/Ethereum.js';
import Litecoin from './pages/Tutorials/Litecoin.js';
import Altcoins from './pages/Tutorials/Altcoins.js';
import NavBar from './headerComponent/navBar.js';
import Footer from './footerComponent/footer.js';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <switch>
            <NavBar />
              <Route exact path="/" component={HomePage} />
              <Route path="/graph" component={graph} />
              <Route exact path="/tutorials" component={tutorials} />
              <Route path="/tutorials/RSI" component={RSI} />
              <Route path="/tutorials/BB" component={BB} />
              <Route path="/tutorials/MACD" component={MACD} />
              <Route path="/tutorials/RSIS" component={RSIS} />
              <Route path="/tutorials/BCT" component={BCT} />
              <Route path="/tutorials/EMA" component={EMA} />
              <Route path="/tutorials/Bitcoin" component={Bitcoin} />
              <Route path="/tutorials/Ethereum" component={Ethereum} />
              <Route path="/tutorials/Litecoin" component={Litecoin} />
              <Route path="/tutorials/Altcoins" component={Altcoins} />
              <Route path="/blog" component={blog} />
              <Route path="/NoMatch" component={NoMatch} />
              <Route path="/bot" component={bot} />
              <Route path="/aboutme" component={aboutMe} />
            <Footer />
          </switch>
          </div>
      </Router>
    )
  }
}

export default App;
