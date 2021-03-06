import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

class InputFoo extends React.Component {
    constructor() {
      super();
      this.handleChange = this.handleChange.bind(this);
      this.submitHandler = this.submitHandler.bind(this);
      this.state = {
        channel: ''
      };
    }
    
    submitHandler(evt) {
      evt.preventDefault();
      // pass the input field value to the event handler passed
      // as a prop by the parent (App)
      this.props.handlerFromParent(this.state.channel);
      
      this.setState({
        channel: ''
      });
    }
    
    handleChange(event) {
      this.setState({
        channel: event.target.value
      });
    }
  
    render() {
      const styles = theme => ({
        button: {
          margin: theme.spacing.unit,
        },
        input: {
          display: 'none',
        },
      });
      return (
        <div >
          <form onSubmit={this.submitHandler}>
            <Input type="text" 
                   id="theInput" 
                   fullWidth="true"
                   placeholder="Enter username here"
                   value={this.state.channel} 
                   onChange={this.handleChange} />
                   <br/>
                   <br/>
                 
                  
            <Button variant="outlined" color="primary"  type="submit" >Load Stream</Button>
          </form>

        </div>
      );
    }
  }
  

export default InputFoo;
