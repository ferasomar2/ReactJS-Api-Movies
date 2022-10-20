import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import {getAllMovie,getMovieSearch} from '../redux/actions/movieAction'
import { useDispatch, useSelector } from "react-redux";


const NavBar = () => {

  const onSearch = (word) => {
    search(word)
  }
  const dispatch = useDispatch();
    //to search in api
    const search = async (word) => {
      if (word === "") {
       dispatch(getAllMovie());
      } else {
        dispatch(getMovieSearch(word))
            }
    }
  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2 ">
          <Col xs="2" lg="1">
            <a href="/">
              <img className="logo" src={logo} alt="dfs" />
            </a>
          </Col>
          <Col xs="10" lg="11" className=" d-flex align-items-center">
            <div className="search  w-100">
              <i className="fa fa-search"></i>
              <input onChange={(e) => onSearch(e.target.value)} type="text" className="form-control" placeholder="ابحث" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
