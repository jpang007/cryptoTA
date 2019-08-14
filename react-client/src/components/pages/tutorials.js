import React, { Component } from 'react';
var Latex = require('react-latex');
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import RSI from './Tutorials/RSI.js';
import BB from './Tutorials/BB.js';
import MACD from './Tutorials/MACD.js';
import RSIS from './Tutorials/RSIS.js';
import BCT from './Tutorials/BCT.js';
import EMA from './Tutorials/EMA.js';
import Bitcoin from './Tutorials/Bitcoin.js';
import Ethereum from './Tutorials/Ethereum.js';
import Litecoin from './Tutorials/Litecoin.js';
import Altcoins from './Tutorials/Altcoins.js';

class tutorials extends Component {
  render() {
    return (
      <div>
        <div className="fade-in">
          <div className ="WriteUp">
            <h1> Tutorials </h1>
            <p> Hey there! Welcome to the tutorials page. Here you can read my writeups on the various technical analysis indicators I did, cryptocurrency
            in general, and find some really helpful links if you want to do more reading and research on both topics. </p>

            <p> Please remember this is all of my own research, nothing in here should be taken as completely 100% factual.
            Doing your own research is the best thing you can do for yourself. And if you spot a mistake please let me know I'm always happy to
            learn!
            </p>

            <p> I would also like the take the time to say that cryptocurrencies are a completely speculative investment. Adoption has been happening,
            although slowly (when's the last time you were asked if you wanted to pay in Bitcoin in person).
            Price fluctuations kind of prevent Bitcoin from being a stable "store of value".
            But despite all that, I find cryptocurrencies really interesting and I hope you do as well! </p>
          </div>

          <div className ="WriteUp">
            <h1> Basic Technical Analysis Indicators </h1>
          </div>
          <div className="btn-group">
            <a href='#/tutorials/RSI'><button>RSI</button></a>
            <a href='#/tutorials/BB'><button>Bollinger Bands</button></a>
            <a href='#/tutorials/MACD'><button>MACD</button></a>
          </div>

          <div className ="WriteUp">
            <h1> Advanced Technical Analysis Indicators </h1>
          </div>
          <div className="btn-group">
          <a href='#/tutorials/RSIS'><button>RSI + Stochastic</button></a>
          <a href='#/tutorials/BCT'><button>Bollinger CT</button></a>
          <a href='#/tutorials/EMA'><button>EMA Crossover</button></a>
          </div>

          <div className ="WriteUp">
            <h1> Cryptocurrencies </h1>
          </div>
          <div className="btn-group">
          <a href='#/tutorials/Bitcoin'><button>Bitcoin</button></a>
          <a href='#/tutorials/Ethereum'><button>Ethereum</button></a>
          <a href='#/tutorials/Litecoin'><button>Litecoin</button></a>
          <a href='#/tutorials/Altcoins'><button>Altcoins</button></a>
          </div>

          <br></br>

        </div>
      </div>
    )
  }
}

export default tutorials;
