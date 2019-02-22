import React, { Component } from 'react';
import './Sass/global.scss'

import ApiConnection from './Component/Fetch-data';

class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="index text-center">
          <ApiConnection/>
        </div>
      </div>
    );
  }
}

export default App;
