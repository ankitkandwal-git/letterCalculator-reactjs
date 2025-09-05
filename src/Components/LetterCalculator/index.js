import { Component } from "react";

import './index.css'

class LetterCalculator extends Component{
    state = {
        phrase : ''
    }
    onChangeInput = event =>{
        this.setState({phrase:event.target.value})
    }
    render(){
        const {phrase} = this.state 
        return(
        <div className="app-container">
        <div className="letters-calculator-container">
          <div className="calculator-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-phrase-container">
              <label className="label" htmlFor="phraseText">
                Enter the phrase
              </label>
              <input
                className="letters-input"
                onChange={this.onChangeInput}
                placeholder="Enter the phrase"
                type="text"
                value={phrase}
              />
            </div>
            <p className="letters-count">No.of letters:{phrase.length}</p>
          </div>
          <img
            alt="letters calculator"
            className="letters-calculator-image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
        )
    }
}

export default LetterCalculator