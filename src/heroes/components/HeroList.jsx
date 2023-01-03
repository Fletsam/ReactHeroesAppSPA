import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesbyPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  const herolist = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <>
      <div className="row rows-cols-1 row-cols-md-3 g-3">
        {herolist.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>
    </>
  );
};
