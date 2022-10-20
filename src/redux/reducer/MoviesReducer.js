import { ALLMOVIES } from "../type/MoviesType";

const initialValue = { movies: [], pageCount: 0 }
const MoviesReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ALLMOVIES:
      return { movies: action.data, pageCount:action.pages }
      default:
        return state;
        
  }
}

export default MoviesReducer;