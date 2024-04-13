type SearchProps = {
  data: {
    name: string;
    type: string;
    caught: boolean;
  }[];
  search: string;
  setSearch: (search: string) => void;
  isCaught: boolean;
  setIsCaught: (isCaught: boolean) => void;
};

const Search = ({
  data,
  search,
  setSearch,
  isCaught,
  setIsCaught,
}: SearchProps) => {
  const uniqueTypes = Array.from(new Set(data.map((pokemon) => pokemon.type)));

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
        <select
          className="select-type"
          id="select-type"
          onChange={(e) => setSearch(e.target.value)}
        >
          <option value="">-- Select --</option>
          {uniqueTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
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
