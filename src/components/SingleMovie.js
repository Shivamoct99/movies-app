import { useParams,NavLink } from "react-router-dom";
import Fetch from "../fetch";

export default function SingleMovie() {
  const { id } = useParams();
  let { movies ,Loading } = Fetch(`&i=${id}`);
  console.log(movies)
  if (Loading) {
    return (
      <section className="movie-section ">
        <div className="loading">Loading....</div>;
      </section>
    );
  }
  let {Title,Poster,Released,Genre,imdbRating,Country}=movies
  return (
    <section className="movie-section">
    <div className="movie-card">
      <figure>
        <img src={Poster} alt="" />
      </figure>
      <div className="card-content">
        <p className="title">{Title}</p>
        <p className=""></p>
        <p className="card-text">{Released}</p>
        <p className="card-text">{Genre}</p>
        <p className="card-text">{imdbRating} / 10</p>
        <p className="card-text">{Country}</p>
        <NavLink to="/" className="back-btn">
          Go Back
        </NavLink>
      </div>
    </div>
  </section>
  );
}
