type PokemonListProps = {
  data: {
    name: string;
    type: string;
    caught: boolean;
}[],
};

const PokemonList = ({ data }: PokemonListProps) => {
  return (
    <div className="list">
      <div className="list-table">
        <div className="list-title">
          <p>Name</p>
          <p>Type</p>
          <p>Status</p>
          <p></p>
        </div>
        <div>
          {data.map((pokemon, index) => (
            <div className="pokemon-list">
              <div className="pokemon-btn">
                <div key={index} className="pokemon-btn">
                  <div className="data-holder">{pokemon.name}</div>
                  <div className="data-holder">{pokemon.type}</div>
                  <div className="data-holder">
                    {pokemon.caught ? <div>Caught</div> : <div>-</div>}
                  </div>
                </div>
              </div>
              <div>
                {pokemon.caught ? (
                  <button className="release-btn">Release</button>
                ) : (
                  <button className="catch-btn">Catch</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
