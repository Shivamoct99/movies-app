import React from 'react'
import { useGlobalContext } from '../context'
import { NavLink } from 'react-router-dom';

export default function Movies() {
  let {movies,Loading}=useGlobalContext();
  if (Loading) {
    return <div className="loading">Loading....</div>;
  }
  return (
    <section className='movie-page'>
      <div className="grid grid-4-col">
      {movies.map((data)=>{
        let {Title,imdbID,Poster}=data
        return <NavLink to={`movie/${imdbID}`} key={imdbID}>
          <div className="card">
            <div className="card-info">
          <h2>{Title}</h2>
          <img src={Poster} alt="Sry Img Not Found" />
            </div>
          </div>
        </NavLink> 
      })};
      </div>
    </section>
  )
}
