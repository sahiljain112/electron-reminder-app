import React, { Component } from 'react';
import { render} from 'react-dom'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      reminder : false
    }
    this.timer = this.timer.bind(this)
    this.timeKeeper = this.timeKeeper.bind(this)
  }

  timer(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  timeKeeper(secondsLeft) {
    this.timer(1000).then(() => {
      console.log(secondsLeft)
      if(secondsLeft === 0)
        this.setState({ reminder: !this.state.reminder }, () => {
          console.log('reminder', this.state.reminder)
          const {resetTime , reminderTime } = this.props
          this.state.reminder ? this.timeKeeper(resetTime) : this.timeKeeper(reminderTime)
        })
      else {
        secondsLeft = secondsLeft - 1
        this.timeKeeper(secondsLeft)
      }
    })
  }

  componentDidMount() {
    const { reminderTime } = this.props
    this.timeKeeper(reminderTime)
  }

  render() {
    const timer = this.state
    var ReminderText = (
      <div className="main-title">
        <div className="reminder-text">
          <span> { timer }</span>
        </div>
      </div>
    );

    var Timer=(
      <div className="main-title">
        <div className="reminder-text">
          <span>Heldlo</span>
        </div>
      </div>
    );

    return (
      <div className='app'>
         { this.state.ReminderText ? ReminderText: Timer }
      </div>
   )
  };
}

render(<App resetTime = {5} reminderTime={3} />, document.querySelector('#root'))
