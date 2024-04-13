
const PokemonList = () => {


  return (
    <div className="list">
      <table className="list-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>bulbasaur</td>
            <td>grass</td>
            <td>Caught</td>
            <td><button className="catch-btn">Catch</button></td>
          </tr>
          <tr>
            <td>pikachu</td>
            <td>electricity</td>
            <td>Caught</td>
            <td><button className="catch-btn">Catch</button></td>
          </tr>
          <tr>
            <td>charmander</td>
            <td>fire</td>
            <td>-</td>
            <td><button className="release-btn">Release</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default PokemonList
