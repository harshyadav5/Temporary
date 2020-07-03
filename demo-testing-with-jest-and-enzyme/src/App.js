import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    }
  }
  render(){

    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The Counter is Currently {this.state.counter >= 0 ? this.state.counter : 0}</h1>
        {this.state.counter < 0 ?
         <p><span data-test="error-display">Counter Can't Be Less Than Zero</span>
         <button 
        data-test="increment-button"
        onClick={() => this.setState({counter: this.state.counter+1})}
        >Increment Counter
        </button>
        </p> 
         :
         <p> 
        <button 
        data-test="increment-button"
        onClick={() => this.setState({counter: this.state.counter+1})}
        >Increment Counter
        </button>
        <button 
        data-test="decrement-button"
        onClick={() => this.setState({counter: this.state.counter-1})}
        >Decrement Counter
        </button>
        </p>}
      </div>
    );
  } 
}

export default App;
