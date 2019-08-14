import React, { Component } from 'react';

class Bitcoin extends Component {
  render() {
    return (
        <div className="fade-in">
          <div className ="WriteUp">
            <h1> RSI </h1>
            <h2> Overview </h2>
            <p> There are many ways to take advantage of the benefits that RSI provides.
            RSI is a momemtum based indicator that tells you if an asset is overbought or oversold.
            My RSI backtesting model trades off the principal of swing rejection. Which honestly, is probably one of the worst ways to trade.
            This is because we aren't trading off guessing what will happen, just what has happened. As such,
            your trades will always be lagging and you will probably end up negative.
            It might seem that,
            when the RSI dips below 30 an assets' value might appear to start to rise.
            And conversely, when RSI hits 70 or higher, it backs down.
            <b> This is not always the case! </b>
            This is not always the case as, as stated before, RSI is a trailing indicator! Therefore, although sometimes
            trading off only RSI might work,
            it is better practice to use RSI to determine pricing and valuation rather than outright trading.  </p>
            <br></br>

            <h2> How is RSI calculated? </h2>
            <a target="_blank" href="http://cns.bu.edu/~gsc/CN710/fincast/Technical%20_indicators/Relative%20Strength%20Index%20(RSI).htm">This site
            does a great job at explaining how to calculate RSI.</a>
            <p> Basically, we are taking a periods (in this case 14 days) average gain and loss, which gives you the first RSI, then all subsequent RSIs
            reuse the previous average gain and loss.
            </p>
            <br></br>

            <h2> How can I use RSI? </h2>
            <p> The most important thing you can do is always be aware that the the RSI limit values placed on an asset should be
            flexible. To correctly judge an asset based on RSI, it is good practice to monitor the trend (up or down or sideways).
            For example, if the value has steadily been decreasing for the last few months, just breaking the 30 buy signal
            might be too high, to be more conservative, one might want to adjust the buy signal down to 20.
            </p>
            <p>
            In our case, cryptocurrencies are extremely volatile and swing very fast. As explained before RSI is a momentum based indicator,
            and cryptocurrencies have a funny habit of suddenly reversing in the opposite direction rapidly. This is why if you play with
            my RSI backtest, you'll notice it performs horribly. In fact, the tighter your limits, the better result you'll have.
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

export default Bitcoin;
