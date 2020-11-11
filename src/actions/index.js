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