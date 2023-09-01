

import { toastErrorNotify } from "./ToastNotify";

const API_KEY = process.env.TMDB_KEY


//* getMovies function return döndürdüğü için movies sayfasında state içinde yakalanabilir
export const getMovies=async(type)=>{

    const URL=`https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}`;

    const res = await fetch(URL);

    if(!res.ok){
        console.log('fetch getdata movie error ')
    };

    const result = await res.json();

 
    return result;

}