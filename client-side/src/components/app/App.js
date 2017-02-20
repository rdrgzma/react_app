import React, { Component } from 'react';
import Cadastro from './../cadastro/Cadastro';
import  './App.css';

class App extends Component {
  render() {
    return (
      <div className="w3-container w3-center">
        <Cadastro campos={this.props.campos}/>
      </div>
    );
  }
}
export default App;
