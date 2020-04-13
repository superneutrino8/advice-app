import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  state = { advice: '' };

  componentDidMount() {
    this.fetchAdviceData();
  }

  fetchAdviceData = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        // console.log(response.data.slip.advice);
        const { advice } = response.data.slip;
        this.setState({ advice })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
        </div>
      </div>
    );
  }
}

export default App;