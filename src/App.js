import React, { Component } from 'react';
import logo from './500x500.jpg';
import './App.css';
import ClCamera from './components/ClCamera';
import Notifier from './components/Notifier';

class App extends Component {
  constructor() {
    super();
    this.state = {
      offline: false
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
    window.addEventListener('online', () => {
      this.setState({ offline: false });
    });

    window.addEventListener('offline', () => {
      this.setState({ offline: true });
    });
  }

  componentDidUpdate() {
    let offlineStatus = !navigator.onLine;
    if (this.state.offline !== offlineStatus) {
      this.setState({ offline: offlineStatus });
    }
  }

  render() {
    return (
      <div className="App">
        <Notifier offline={this.state.offline} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="Pay-a-Vegan Logo" />
          <h1 className="App-title">VeganCam</h1>
        </header>
        <ClCamera offline={this.state.offline}></ClCamera>
      </div>
    );
  }
}

export default App;
