

import { toastErrorNotify } from "./ToastNotify";

const API_KEY = process.env.TMDB_KEY


//* getMovies function return döndürdüğü için movies sayfasında state içinde yakalanabilir
export const getMovies=async(type)=>{

    const URL=`https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}`;

    const res = await fetch(URL);
    
    //? next.js ile fetch api çekilen verileri default olarak cache'ler. bu özelliği option objesi ile değiştirebiliriz
    //* no store ile cache de data tutmaz
    // const res = await fetch(URL,{cache:"no-store"} );

    //* revalidate ile belirli aralıklarda datayı çeker ve cache de tutar
    // const res = await fetch(URL,{next:{revalidate:10}} );

    //* force-cache ile data çekilir ve cache tutulur default olarak bu ayarlıdır.
    // const res = await fetch(URL,{cache:"force-cache"});

    if(!res.ok){
        console.log('fetch getdata movie error ')
    };

    //* responsedan gelen datanın içinde results arrayi var bunu detracturing yapıyoruz.
    const {results} = await res.json();

    return results

}