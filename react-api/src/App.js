import React, { Component } from 'react';
import './Sass/global.scss'

import ApiConnection from './Component/Fetch-data';

class App extends Component {

  constructor(){
    super()
    this.state = {
      load: false,
      character:{}
    }
  }

  componentDidMount() {
    this.setState({load:true})
    fetch('https://swapi.co/api/people/1').then(response =>response.json()).then(data =>{
      this.setState({
        load: false,
        character: data
      }
      )
    })
  }

  render() {

    const apiText = this.state.load ? 'loading...' : this.state.character.name

    return (
      <div className="App">
        <div className="index text-center">
          <ApiConnection apitext={apiText}/>
        </div>
      </div>
    );
  }
}

export default App;
