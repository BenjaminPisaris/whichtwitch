import React, { Component } from 'react';
import './App.css';
import ReactTwitchEmbedVideo from "react-twitch-embed-video";
var Navbar = require('react-bootstrap').Navbar;
var FormGroup = require('react-bootstrap').FormGroup;
var Button = require('react-bootstrap').Button;
var FormControl = require('react-bootstrap').FormControl;
class App extends Component {
  constructor() {
    super();
    this.state = { 
      message: '',
      channel: "ninja",
    };
    
  }

  

  render() {
    return (
      <div className="App">
       <Navbar>
  <Navbar.Header>
    
      <h2>WhichTwitch</h2>
    
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Navbar.Form pullLeft>
      <FormGroup>
        <FormControl type="text" placeholder="Search" />
      </FormGroup>{' '}
      <Button type="submit">Search</Button>
    </Navbar.Form>
  </Navbar.Collapse>
</Navbar>;

<ReactTwitchEmbedVideo channel={this.state.channel} />
        
      </div>
    );
  }
}


export default App;