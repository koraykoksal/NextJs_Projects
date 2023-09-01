import { getMovies } from '@/helpers/movieFunctions'
import React from 'react'

// export const metadata={
//     title:"Movies"
// }

const Movies = async () => {


  const result = await getMovies("now_playing")

  console.log(result)


  return (
    <div>Movies</div>
  )
}


export default Movies
