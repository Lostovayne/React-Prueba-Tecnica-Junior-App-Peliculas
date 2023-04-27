import { PropTypes } from 'prop-types'
export const ListOfMovies = ({ movies }) => {
  return (
    <ul className='pelis'>
      {movies.map((movie) => (
        <li className='peli' key={movie.id}>
          <h2 className='movie-title'>{movie.title}</h2>
          <p className='texto-peli'>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  )
}

export const NoMoviesResults = () => {
  return (
    <div className='no-movies'>
      <h2>No hay resultados</h2>
    </div>
  )
}

export function Movies({ movies }) {
  const hasMovies = movies.length > 0
  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />
}

Movies.propTypes = {
  movies: PropTypes.array
}

ListOfMovies.propTypes = {
  movies: PropTypes.array
}
