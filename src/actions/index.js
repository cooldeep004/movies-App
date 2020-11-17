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