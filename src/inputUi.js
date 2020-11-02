import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { action1, action2, action3, actionReset } from './actions';
import MovieList from './movieList'

const InputUi = (props) => {
  const [showLabel, toggleShowLabel] = useState(false)
  const { movies, fullMovies } = props;
  return <div class="text-left">
    <p />
    <button type="primary" class="btn btn-primary" onClick={() => {
      const amitabhFilterdMovie = fullMovies.filter(movie => movie.actors === 'Amitabh')
      props.action1(amitabhFilterdMovie)
    }}>Filter by Amitabh</button><p />
    <button type="primary" class="btn btn-primary" onClick={() => {
      const yearFilterdMovie = fullMovies.filter(movie => movie.years === 2002)
      props.action1(yearFilterdMovie)
    }}>Filter a movie which released in 2002</button><p />
    <button type="primary" class="btn btn-primary" onClick={() => {
      toggleShowLabel(true)
    }}>How many movies are there in the table</button>
    {showLabel && `${movies.length} movies`}
    <p />
    <button type="danger" class="btn btn-danger" onClick={() => {
      props.actionReset()
    }}>Reset Table</button><p />
    <MovieList list={movies} header={['id', 'Movie Name', 'Actors', 'Years']} />
  </div>
};

const mapStateToProps = state => {
  return {

    // keyname of component : state.{reduername}.{keyname of reducer}
    movies: state.movieReducer.filteredMovies || [],
    fullMovies: state.movieReducer.movies || []
  };
};

const mapDispatchToProps = {
  action1, action2, action3, actionReset
};

export default connect(mapStateToProps, mapDispatchToProps)(InputUi);