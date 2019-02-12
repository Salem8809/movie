import React, { Component } from 'react';
import './App.css';
import Cast from './Cast'

class Movie extends Component {
    render() {
      // const movieprop = this.props.movie;
      const cast = this.props.movie.cast.map(person =>{
        return <Cast castData={person}/>
      });

      return (

       <div>
       <h2>{this.props.movie.id}</h2>
       <h2>{this.props.movie.title}</h2>
       <h3>{"Rating: " + this.props.movie.rating}</h3>
       <p>{"Description: " + this.props.movie.description}</p>
       <h3>{"Director: " +this.props.movie.director}</h3>
       {cast}
       <img src = {this.props.movie.poster} />
       </div>
     

       
      );
    }
  }


  export default Movie;