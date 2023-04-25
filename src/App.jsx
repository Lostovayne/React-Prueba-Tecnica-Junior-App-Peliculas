import './App.css'

import responseMovies from './mocks/with-results.json'

function App() {
  const movies = responseMovies.Search
  const hasMovies = movies.length > 0

  return (
    <div className='page'>
      <header>
        <h1>Search Movie App</h1>
        <form className='form'>
          <input type='text' placeholder='Avengers, Star Wars, The Matrix' />
          <button>Search</button>
        </form>
      </header>

      <main>
        {hasMovies ? (
          <ul className='pelis'>
            {movies.map((movie) => (
              <li className='peli' key={movie.imdbID}>
                <h2 className='movie-title'>{movie.Title}</h2>
                <p>{movie.Year}</p>
                <img src={movie.Poster} alt={movie.Title} />
              </li>
            ))}
          </ul>
        ) : (
          <p>No movies found</p>
        )}
      </main>
    </div>
  )
}

export default App
