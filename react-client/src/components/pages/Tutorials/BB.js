import React, { Component } from 'react';

class BB extends Component {
  render() {
    return (
      <div className="fade-in">
        <div className ="WriteUp">
          <h1> Bollinger Bands </h1>
          <h2> Overview </h2>
          <p> Bollinger Bands are another technical analysis tool that help with seeing volatility. Bollinger Bands
          come in three parts: and upper, middle and lower. The middle band is just the Simple Moving Average
          of the stock, which gives the average price of a security over a period of time and helps guide
          the movement direction of an asset. The upper and lower bands show
          </p>
          <br></br>

          <h2> How are Bollinger Bands calculated? </h2>
          <a target="_blank" href="https://traderhq.com/ultimate-guide-to-bollinger-bands/">This site
          does a great job at explaining how to calculate Bollinger Bands.</a>
          <p> Bollinger Bands might be the easiest technical indicator to calculate. First we have
          to calculate the Simple Moving Average for a single day. Do this on a 20 day period, we need well... 20 days before.
          After which we just take the mean of all those closing prices. Ta-da! We know have a Simple Moving Average for one day.
          From here, we want the standard deviation of those same closing prices and multiple it by 2 (to get 2 standard deviations).
          Now we either add or subtract that value from the Simple Moving Average value to get the upper or lower band, respectively.
          </p>
          <br></br>

          <h2> The Bollinger Band Squeeze and Breakouts </h2>
          <p>
          The downfall of Bollinger Bands and Simple Moving Average is that they both don't really help you see future directional changes.
          You'll have to look at other indicators or the asset itself. Squeezes occur when the upper and lower band start moving towards each other,
          putting pressure on the moving average. This technique is useful since when squeezes tighten, volatility is low so a possible large
          "volatile" movement might occur soon.
          </p>
          <p>
          A breakout is when an assets' RSI moves above the upper band or below the lower band. Since most of the trading action happens between the bands,
          a breakout is a big event. However, breakouts do not signal a buy or sell.
          My Bollinger Band strategy trades on only breakouts, and is probably one of the <b> worst </b> ways you can trade.
          This is quite evident by the absymal return percentage when trying to trade on RSI breakouts.

          </p>
        </div>
        <div className="btn-group">
          <a href='#/tutorials'><button>Previous</button></a>
        </div>
        <br></br>
      </div>
    )
  }
}

export default BB;
