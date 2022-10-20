
import { ALLMOVIES,MovieApi } from "../type/MoviesType";
import axios from "axios";

export const getAllMovie =  () => {
  //higher order function 
  return async (dispatch) => {
    const res = await axios.get(MovieApi)
    dispatch({type: ALLMOVIES, data:res.data.results, pages:0})
  }}
 
 export const getMovieSearch =  (word) => {
    //higher order function 
    return async (dispatch) => {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`)

      dispatch({type: ALLMOVIES, data:res.data.results, pages:0})
    }
}
