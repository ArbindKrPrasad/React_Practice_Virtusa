import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Message from './components/message'
import Hello from './components/Hello'
import Counter from './components/Counter';
import ParentComponent from './components/ParentComponent';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FunctionClick />
        <ClassClick />
        {/* <ParentComponent /> */}
        {/* <Counter/> */}
        {/* <Message /> */}
        {/* <Greet name='Bruce' heroName = 'Batman'>
          <p>This  is a children tag</p>
        </Greet>
        <Greet name='Clark' heroName = 'Soider Man'/>
        <Greet name='Bruce' heroName = 'Wonder woman'/> */}
      </div>
    );
  }
}

export default App;
