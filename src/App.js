import React, { Component, createElement } from 'react';
import Layout from './components/layout';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';






class App extends Component {
  constructor() {
    super();
    
  }
  state = { streams: 0 }

  





render() {
  return (
    <div className="App">
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            <h2>WhichTwitch</h2>
          </Typography>
          <Button onClick={null}>Add Stream</Button>
          
        </Toolbar>
      </AppBar>
      <Layout key={1}/>
      <Layout key={2}/>
      <Layout key={3}/>
    </div>
  );
}
}


export default App;