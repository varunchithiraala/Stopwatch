// Write your code here
import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  state = {
    isTimmerRunning: false,
    timeElapsedInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval)
  }

  updateTimer = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onClickStartTimer = () => {
    this.timerInterval = setInterval(this.updateTimer, 1000)
    this.setState({isTimmerRunning: true})
  }

  onClickStopTimer = () => {
    clearInterval(this.timerInterval)
    this.setState({isTimmerRunning: false})
  }

  onClickResetTimer = () => {
    clearInterval(this.timerInterval)
    this.setState({
      isTimmerRunning: false,
      timeElapsedInSeconds: 0,
    })
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)

    return minutes < 10 ? `0${minutes}` : minutes
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)

    return seconds < 10 ? `0${seconds}` : seconds
  }

  render() {
    const {isTimmerRunning} = this.state
    const timer = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="stopwatch-app-container">
        <div className="stopwatch-container">
          <h1 className="stopwatch-heading">Stopwatch</h1>
          <div className="stopwatch-timer-container">
            <div className="timer-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                className="stopwatch-timer-image"
                alt="stopwatch"
              />
              <p className="timer-heading">Timer</p>
            </div>
            <h1 className="stopwatch-timer">{timer}</h1>
            <div className="stopwatch-buttons-container">
              <button
                className="start-button stopwatch-button"
                onClick={this.onClickStartTimer}
                disabled={isTimmerRunning}
                type="button"
              >
                Start
              </button>
              <button
                className="stop-button stopwatch-button"
                onClick={this.onClickStopTimer}
                type="button"
              >
                Stop
              </button>
              <button
                className="reset-button stopwatch-button"
                onClick={this.onClickResetTimer}
                type="button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
