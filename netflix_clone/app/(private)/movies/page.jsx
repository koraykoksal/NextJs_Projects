import { getMovies } from '@/helpers/movieFunctions'
import React from 'react'
import MovieSection from './components/MovieSection'

// export const metadata={
//     title:"Movies"
// }

const Movies = async () => {


  const result = await getMovies("now_playing")

  console.log(result)

  return (
    <div className='px-4 md:px-12 mt-4'>

      <MovieSection title="NOW PLAYING" type="now_playing"/>
      <MovieSection title="POPULAR" type="popular"/>
      <MovieSection title="TOP RATED" type="top_rated"/>
      <MovieSection title="UP COMING" type="upcoming"/>

    </div>
  )
}


export default Movies
