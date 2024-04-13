import { useNavigate } from 'react-router-dom';

const PokemonProfile = () => {
    let navigate = useNavigate();
  return (
    <div className="profile-container">
      <div className="pokemon-details">
        <div className="img-holder">
      <button className="backToSearch-btn" onClick={() => navigate('/')}>Back to search</button>
          <img className="pokemon-img" src="./img/pepesaur.jpg" alt="" />
        </div>
        <div className="details-table-holder">
          <table className="pokemon-details-table">
            <tr>
              <td>Name</td>
              <th>Pepesaur</th>
            </tr>
            <tr>
              <td>Weight</td>
              <th>999kg</th>
            </tr>
            <tr>
              <td>Abilities</td>
              <tr>Sadness</tr>
              <tr>Sadness</tr>
              <tr>Sadness</tr>
            </tr>
            <tr>
              <td>Status</td>
              <th>-</th>
            </tr>
          <button className="release-btn" >Release</button>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PokemonProfile;
