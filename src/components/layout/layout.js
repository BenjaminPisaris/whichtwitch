import React from 'react';
import Card from '@material-ui/core/Card';
import Draggable from 'react-draggable';
import Widget from '../widget';

class Layout extends React.Component {
  getInitialState() {
    return {

      deltaPosition: {
        x: 0, y: 0
      }
  }}


  render() {
    
    return (
      <Draggable 
      bounds={{ left: 0}}
        handle=".handle"
        defaultPosition={{x: 20, y: 30}}
      
        grid={[25, 20]}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}
        >
        <Card style={{
          width: 480,
          height: 720,
          textAlign: 'center'
        }}>
          <div className="handle">Drag from here</div>
          <Widget/>
        </Card>
      </Draggable>
    );
  }
}

export default Layout;