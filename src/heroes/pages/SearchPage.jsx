import queryString from "query-string";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components/HeroCard";
import { getHeroesbyName } from "../helpers/getHeroesbyName";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const heroes = getHeroesbyName(q);

  const { searchText, onInputChange, onReset } = useForm({
    searchText: "",
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.length <= 1) return;
    navigate(`?q=${searchText}`);
    onReset();
  };

  return (
    <>
      <h1>SearchPage</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a Hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>
        <div className=" col-7">
          <h4>Results</h4>
          <hr />

          {heroes.length || q === "" ? (
            heroes.map((hero) => <HeroCard key={hero.id} hero={hero} />)
          ) : (
            <div className="alert alert-danger">Hero not Found</div>
          )}
        </div>
      </div>
    </>
  );
};
