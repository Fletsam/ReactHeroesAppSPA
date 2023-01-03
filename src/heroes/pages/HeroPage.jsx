import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroebyID } from "../helpers/getHeroebyID";

export const HeroPage = () => {
  const { id } = useParams();
  const hero = useMemo(() => getHeroebyID(id), [id]);
  const navigate = useNavigate();
  const OnReturn = () => {
    navigate(-1);
  };
  if (!hero) {
    return <Navigate to={"/marvel"} />;
  }
  return (
    <div className="row mt-5 animate__animated animate__fadeInLeft">
      <div className="col-4">
        <img
          className="img-thumbnail "
          src={`/heroes/${id}.jpg`}
          alt={hero.superhero}
        />
      </div>
      <div className="col-8">
        <h3> {hero.superhero}</h3>
        <ul className=" list-group-item">
          <li>
            <b>Alter Ego : </b>
            {hero.alter_ego}
          </li>
          <li>
            <b>Publisher : </b>
            {hero.publisher}
          </li>
          <li>
            <b>First Appareance : </b>
            {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characteres</h5>
        <p>{hero.characters}</p>
        <button className="btn btn-outline-primary" onClick={OnReturn}>
          Regresar
        </button>
      </div>
    </div>
  );
};
