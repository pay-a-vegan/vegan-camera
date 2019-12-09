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

        <ClCamera offline={this.state.offline}></ClCamera>
      </div>
    );
  }
}

export default App;
