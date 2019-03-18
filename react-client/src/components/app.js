import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Switch, browserHistory } from 'react-router';
import HomePage from './pages/homePage.js';
import graph from './pages/graph.js';
import learn from './pages/learn.js';
import bot from './pages/bot.js';
import aboutMe from './pages/aboutme.js';
import NoMatch from './pages/NoMatch.js';
import NavBar from './headerComponent/navBar.js';
import Footer from './footerComponent/footer.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <NavBar />
            <Route exact path="/" component={HomePage} />
            <Route path="/graph" component={graph} />
            <Route path="/learn" component={learn} />
            <Route path="/bot" component={bot} />
            <Route path="/aboutme" component={aboutMe} />
            <Footer />
          </div>
      </Router>
    )
  }
}

export default App;
