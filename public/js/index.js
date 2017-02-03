import React, { Component } from 'react';
import { render} from 'react-dom'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ReminderText:true
    }
    this.timer = this.timer.bind(this)
  }

  timer(ms) {
  return new Promise((resolve) => {
    setTimeout(()=> {
      resolve(this.setState({ReminderText:!this.state.ReminderText}));
    }, ms);
  });
 }

  render() {
    this.timer(2000);
    var ReminderText=(
      <div className="MainAppTile">
        <div className="ReminderText">
          <span>It's Time To Dance</span>
        </div>
      </div>
    );

    var Timer=(
      <div className="MainAppTile">
        <div className="ReminderText" >
          <span>Heldlo</span>
        </div>
      </div>
    );

    return (
      <div>
         { this.state.ReminderText ? ReminderText: Timer }
      </div>
   )
  };
}

render(<App />, document.querySelector('#root'))
