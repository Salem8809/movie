import React, { Component } from 'react';
import './App.css';

class Cast extends Component {
    render() {
    
      return (
   <div>
      <p>{this.props.castData.name}: {this.props.castData.role}</p>
      
      </div>

      );
      }
    }

    export default Cast;