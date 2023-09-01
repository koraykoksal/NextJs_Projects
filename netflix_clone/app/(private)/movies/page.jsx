import { getMovies } from '@/helpers/movieFunctions'
import React from 'react'
import MovieSection from './components/MovieSection'
import HeroSection from './components/HeroSection'

// export const metadata={
//     title:"Movies"
// }

const Movies = async () => {


  const result = await getMovies("now_playing")


  return (
    <div className='px-4 md:px-12 my-5 '>

      <HeroSection
      title={result[0]?.title}
      overview={result[0]?.overview}
      id={result[0]?.id}
      />
      <MovieSection title="NOW PLAYING" type="now_playing"/>
      <MovieSection title="POPULAR" type="popular"/>
      <MovieSection title="TOP RATED" type="top_rated"/>
      <MovieSection title="UP COMING" type="upcoming"/>

    </div>
  )
}


export default Movies
