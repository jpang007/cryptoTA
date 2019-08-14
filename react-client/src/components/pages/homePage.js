import React, { Component } from 'react';
import bitcoin from '../../../../img/bitcoin3.jpg';
import metrics from '../../../../img/metricstest.png';
import finance from '../../../../img/financetest.png';
import data from '../../../../img/datatest.png';
import question from '../../../../img/questionmark.png';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className = "homePageIntro">
          <div className = "imgcontainer">
            <img src={bitcoin} className='titleImg' />
          </div>


          <Fade top cascade duration={2000}>
          <h1> CryptoTA </h1>
          <p>
          Simple. Technical. Analysis.
          </p>
          </Fade>
        </div>
        <div className = "homePageIntro2">
          <Fade top cascade duration={2000}>
          <p>  Be bold. Be a winner. </p>
          </Fade>
        </div>
          <div className ="subSection">
              <div className ="column1">
                <Fade left duration={2000}>
                  <h1> No Knowledge? </h1>
                  <p> Check out our tutorials page!
                  It's hard to make a winning strategy without knowing the basics!</p>
                </Fade>
              </div>
              <div className="column2">
                <Fade right duration={2000}>
                <img src={metrics} className='metricsImg' />
                </Fade>
              </div>
            </div>
          <div className ="subSection">
            <div className ="column1">
              <Fade left duration={2000}>
                <h1> Test your opportunities. </h1>
                <p> Our bot performance section allows you to stimulate and receive approximate return percentages
                following a certain trading strategy. </p>
              </Fade>
            </div>
            <div className="column4">
              <Fade right duration={2000}>
              <img src={finance} className='financeImg' />
              </Fade>
            </div>
          </div>
          <div className ="subSection">
            <div className ="column1">
              <Fade left duration={2000}>
                <h1> Build your winning strategy. </h1>
                <p> Pick one of our preset trading strategies, or use a combination of the tools we provide to build your own. </p>
              </Fade>
            </div>
            <div className="column4">
              <Fade right duration={2000}>
              <img src={data} className='dataImg' />
              </Fade>
            </div>
          </div>
        <div className = "subSection2">
          <Fade cascade duration={2000}>
          <details>
            <summary>What is this site?</summary>
            <p> This site contains multiple features, a graph of Bitcoin, Ethereum and Litecoin with various technical indicators (all my own calculations),
            a section where I explain the various Technical Analysis indicators that can be used and finally a section where you can see how
            using specific indicators would give you certain percentage results. In the background of the app is my own cryptocurrency trading bot that
            uses a combination of various indicators. </p>
          </details>
          </Fade>
        </div>
      <div className = "subSection2">
      <Fade cascade duration={2000}>
        <details>
          <summary>What is exactly is trading on technical analysis?</summary>
              <p> Trading on technical analysis without background information is basically the same as a monkey throwing darts onto a target. It
              can provide valuable information coupled with information about the asset you are trading. If you aren't familiar with cryptocurrency
              and blindly following what other people say, you are playing with fire. </p>
        </details>
      </Fade>
    </div>
    <div className = "subSection2">
    <Fade cascade duration={2000}>
    <details>
      <summary>What's next?</summary>
        <p> I don't plan on allowing anyone to use my trading bot. Other websites already exist claiming to give people fat return percentages.
        I plan on continuing development by adding more indicators and doing more writeups. </p>
    </details>
    </Fade>
  </div>
    </div>
    )
  }
}

export default HomePage;
