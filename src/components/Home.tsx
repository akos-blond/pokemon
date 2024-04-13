import { useState } from "react";
import PokemonList from "./PokemonList";
import Search from "./Search";

const Home = () => {
  const [search, setSearch] = useState("");
  const [isCaught, setIsCaught] = useState(false);

  const [data, setData] = useState([
    {
      name: "bulbasaur",
      type: "Grass",
      caught: true,
    },
    {
      name: "ivysaur",
      type: "Grass",
      caught: true,
    },
    {
      name: "venusaur",
      type: "Grass",
      caught: true,
    },
    {
      name: "charmander",
      type: "Fire",
      caught: false,
    },
  ]);

  return (
    <div className="content">
      <Search
        data={data}
        search={search}
        setSearch={setSearch}
        /*isChaught={isChaugch}
        setIsChaught={setIsCaught}*/
      />
      <PokemonList
        data={data.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(search.toLowerCase())
        )}
      />
    </div>
  );
};

export default Home;
