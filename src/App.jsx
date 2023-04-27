import { useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const { movies } = useMovies()
  const [query, setQuery] = useState()
  
  
  //forma no controlada
  
  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   const data = Object.fromEntries(new FormData(event.target))
  //   console.log(data)
  
  // }


  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(query)
  }

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Search Movie App</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name='query'
            type='text'
            placeholder='Avengers, Star Wars, The Matrix'
          />
          <button className='searchButton'>Search</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
