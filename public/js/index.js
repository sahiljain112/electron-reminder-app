import React, { Component } from 'react';
import { render } from 'react-dom';

const getFormattedTime = (secondsLeft) => {
  const mins = Math.floor((secondsLeft / 60))
  secondsLeft = secondsLeft % 60
  return [mins, secondsLeft]
}

const DisplayText = (props) => {
  return (
    <div className='display-content slide-right'>
      {props.message}
    </div>
  )
}

const DisplayClock = (props) => {
  const { secondsLeft } = props
  const [ mins, secs] = getFormattedTime(secondsLeft)
  console.log('Mins and secs', mins, secs)

  return (
    <div className='display-content slide-right'>
      {mins} : {secs}
    </div>
  )
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      reminder : false,
      secondsLeft: props.reminderTime
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
      if(secondsLeft === 0){
        const {resetTime , reminderTime } = this.props
        if(this.state.reminder) {
          this.setState({
            reminder: !this.state.reminder,
            secondsLeft: reminderTime
           }, () => {
            this.timeKeeper(reminderTime)
          })
        }
        else{
          this.setState({
            reminder: !this.state.reminder,
            secondsLeft: reminderTime
           }, () => {
            this.timeKeeper(resetTime)
          })
        }
      }
      else {
        secondsLeft = secondsLeft - 1
        this.timeKeeper(secondsLeft)
        this.setState({ secondsLeft: this.state.secondsLeft - 1})
      }
    })
  }

  componentDidMount() {
    const { reminderTime } = this.props
    this.timeKeeper(reminderTime)
  }

  render() {

    console.log(__dirname)
    const { reminder, secondsLeft } = this.state
  //  console.log('Rendered on state change')
    const message = 'Time to drink water'
    const displayContent = this.state.reminder ? <DisplayText message={ message } /> : <DisplayClock secondsLeft={secondsLeft} />

    return (
      <div className='app'>
         { displayContent }
      </div>
   )
  };
}

render(<App resetTime = {5} reminderTime={900} />, document.querySelector('#root'))
