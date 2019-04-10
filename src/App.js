import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Instruments from './containers/Instruments/Instruments';
import Songs from './containers/Songs/Songs';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <ul>
            <li>
              <Link to='/songs'>Songs</Link>
            </li>
            <li>
              <Link to='/instruments'>Instruments</Link>
            </li>
          </ul>
        </div>
        <Route path='/songs' component={Songs} />
        <Route path='/instruments' component={Instruments} />
      </BrowserRouter>
    );
  }
}

export default App;
