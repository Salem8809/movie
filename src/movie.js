import React, { Component } from 'react';
import './App.css';
import Review from './review'

class Movie extends Component {
    render() {
      return (
        <div>
       
       <h2>{this.props.movie.id}</h2>
       <h2>{this.props.movie.title}</h2>
       <h3>{this.props.movie.rating}</h3>
       <p>{this.props.movie.description}</p>
       <img src = {this.props.movie.poster} />
       
       </div>

       
      );
    }
  }


  export default Movie;