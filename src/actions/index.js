// action types
export const ADD_MOVIES='ADD_MOVIES';
//action creaters

export function addMovies(movies){
    return{
        type:ADD_MOVIES,
        movies
    }
}
// action types
export const ADD_FAVOURITE='ADD_FAVOURITE';
//action creaters

export function addFavourite(movie){
    return{
        type:ADD_FAVOURITE,
        movie
    }
}


export const REMOVE_FAVOURITE='REMOVE_FAVOURITE';
export function removeFavourite(movie){
    return{
        type:REMOVE_FAVOURITE,
        movie
    }
}

export const SHOW_FAVOURITE='SHOW_FAVOURITE';
export function showFavourite(val){
    return{
        type:SHOW_FAVOURITE,
        val
    }
}

export const ADD_MOVIE_TO_LIST='ADD_MOVIE_TO_LIST';
export function addMoviesToList(movie){
    return {
        type:ADD_MOVIE_TO_LIST,
        movie
    };
}
export function handleMovieSearch(movie){
    const url=`http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;

    return function(dispatch)
    {
        fetch(url) 
    .then(Response =>Response.json())
    .then (movie =>{
        console.log('movie', movie);
        dispatch(addMovieSearchResult(movie))
    })
    }
}
export const ADD_SEARCH_RESULT='ADD_SEARCH_RESULT';
export function addMovieSearchResult(movie){
    return{
        type:ADD_SEARCH_RESULT,
        movie
    };
}