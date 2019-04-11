import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Instruments from './containers/Instruments/Instruments';
import Songs from './containers/Songs/Songs';
import Song from './containers/Songs/Song/Song';

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
        <Switch>
          {/* <Route path='/songs/:id' component={Song} /> */}
          <Route path='/songs' component={Songs} />
          <Route path='/instruments' exact component={Instruments} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
