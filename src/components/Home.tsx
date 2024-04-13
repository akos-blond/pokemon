import PokemonList from "./PokemonList";
import Search from "./Search";


const Home = () => {

  return (
    <div className="content">
      <Search />
      <PokemonList />
    </div>
  );
};

export default Home;
