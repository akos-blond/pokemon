
const Search = () => {


  return (
    <div className="search-area">
      <form action="" className="form">
        <label htmlFor="">Filters</label>
        <input type="search"/>
        <label htmlFor="">Pokemon Types</label>
        <select className="select-type" id="select-type" >
            <option value="">Select...</option>
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
