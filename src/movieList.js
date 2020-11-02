import React from 'react'

const movieList = (props) => {
  const {list, header} = props
  return <>
    <table class="table table-bordered">
      <thead class="thead black-text">
        <tr class="table-danger">
          {header.map(h => <th scope='col'>{h}</th>)}
        </tr>
      </thead>
      <tbody>
        {list.map(movie => <tr key={movie.id}>
          <td>{movie.id}</td>
          <td>{movie.moviename}</td>
          <td>{movie.actors}</td>
          <td>{movie.years}</td>
        </tr>)}
      </tbody>
    </table>
  </>
}

export default  movieList