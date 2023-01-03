import { heroes } from "../data/heroes";

export const getHeroebyID = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};
