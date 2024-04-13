type SearchProps = {
  data: {
    name: string;
    type: string;
    caught: boolean;
  }[];
  search: string;
  setSearch: (search: string) => void;
};

const Search = ({ data, search, setSearch }: SearchProps) => {
  return (
    <div className="search-area">
      <form action="" className="form">
        <label htmlFor="">Filters</label>
        <input
          type="text"
          id="search"
          role="searchbox"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <label htmlFor="">Pokemon Types</label>
        <select className="select-type" id="select-type">
          {data.map((pokemon) => {
            return (
              <option value={pokemon.type}>
                {pokemon.type}
              </option>
            );
          })}
          ;
        </select>
        <div className="checker">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Only show caught Pokemon</label>
        </div>
      </form>
    </div>
  );
};

export default Search;
