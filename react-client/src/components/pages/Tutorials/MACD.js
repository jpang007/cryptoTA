import React, { Component } from 'react';

class MACD extends Component {
  render() {
    return (
        <div className="fade-in">
          <div className ="WriteUp">
            <h1> MACD </h1>
            <h2> Overview </h2>
            <p> MACD! Oh boy, when I first backtested this trading strategy I was extremely surprised by the results.
            MACD, compared to RSI and Bollinger Bands, works leagues better in terms of trading. MACD is just the comparaison
            of different moving averages. The benefit of MACD can be used to identify trends and momentum. Crossover and Divergence
            are two common MACD trading strategies. I implemented the crossover strategy in my backtesting algorithm.
            </p>
            <br></br>

            <h2> How is MACD calculated? </h2>
            <a target="_blank" href="http://investexcel.net/how-to-calculate-macd-in-excel/">This site
            does a great job at explaining how to calculate MACD.</a>
            <p> MACD is traditionally calculated by: (12-day EMA - 26-day EMA). The signal line is a 9-day EMA of the MACD line. Finally, the historgram
             is calculated by: (Signal Line) - (MACD line). MACD seems complicated to calculate, however once you get past the terminalogy and look
             at the raw formulas it'll make more sense.
            </p>
            <br></br>

            <h2> Okay... Soooo what does everything mean? </h2>
            <p> Since MACD has more parts then something like RSI or Bollinger Bands it might be a little harder to see how all the pieces fit together.
            Let's breakdown every part so you can have a clearer grasp of what each piece means. Again, the MACD line is calculated using the
            12-day EMA and 26-day EMA. A positive MACD value means that the 12-day is above the 26-day. <b>So positive momentum is increasing! </b>
            A negative MACD value means the 12-day is below the 26-day. <b> So negative momentum is increasing! </b> The singal line trails the MACD line,
            you can see how it appears as a smoother line, and can help confirm MACD trend reversals.
            </p>

            <h2> MACD Crossovers </h2>
            <p> As the ocean waves ebb and flow, so does the MACD. If we peak at the graph, we'll see that the Signal line and MACD line cross over often.
            This is the principal behind trading on MACD. Looking at the historgram helps me as well, seeing how the histogram bounces from positive into negative.
            Of course, no trading strategy is that simple. Although trading on crossovers is a pretty decent strategy, using crossovers to validate other
            indicators (such as RSI) leads to better performance.
            </p>
            <p> Even without using other technical indicators, just by watching the trend of the graph alone helps when confirming movements. For example, if
            an asset has steadily been increasing, a correction is bound to happen. Waiting out the correction
            for another bullish crossover is a better move in this situation.
            </p>
            <a target="_blank" href="https://www.investopedia.com/stock-analysis/cotd/022614/bullish-and-bearish-macd-crossovers-lnkd-wyn-amt-twc.aspx">Click
            here for some MACD trend examples.</a>
          </div>
          <div className="btn-group">
            <a href='#/tutorials'><button>Previous</button></a>
          </div>
          <br></br>
        </div>
    )
  }
}

export default MACD;
