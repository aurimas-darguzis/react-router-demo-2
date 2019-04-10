import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Instruments from './containers/Instruments/Instruments';
import Songs from './containers/Songs/Songs';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <div className='App'>
          <ul>
            <li>Songs</li>
            <li>Instruments</li>
          </ul>
        </div> */}
        <Route path='/songs' component={Songs} />
        <Route path='/instruments' component={Instruments} />
      </BrowserRouter>
    );
  }
}

export default App;
