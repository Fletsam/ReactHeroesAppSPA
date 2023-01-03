import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({ hero }) => {
  const heroImageUrl = `/heroes/${hero.id}.jpg`;
  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className=" col">
            <img src={heroImageUrl} className="card-img" alt={hero.superhero} />
          </div>
          <div className="col">
            <div className="card-body">
              <h5 className="card-tittle"> {hero.superhero}</h5>
              <p className="card-text"> {hero.alter_ego}</p>
              {hero.alter_ego !== hero.characters ? (
                <p> {hero.characters}</p>
              ) : (
                ""
              )}
              <p className="card-text">
                <small className="text-muted"> {hero.first_appearance}</small>
              </p>
              <Link to={`/hero/${hero.id}`}>Mas info...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
