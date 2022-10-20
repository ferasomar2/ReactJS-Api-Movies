import { Container } from "react-bootstrap";
import React, { useEffect, useState } from 'react'
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import MovieDetails from './components/MovieDetails'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
// import {getAllMovie} from './redux/actions/movieAction'

function App() {

  const [pageCount, setpageCount] = useState(0)
  //get current page
  const getPage = async (page) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${page}`)
    // setMovies(res.data.results)
    setpageCount(res.data.total_pages)
  }

  

  return (
    <div className="font color-body ">
      <NavBar/>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList getPage={getPage} pageCount={pageCount} />} />

            <Route path="/movie/:id" element={<MovieDetails />} />

          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
