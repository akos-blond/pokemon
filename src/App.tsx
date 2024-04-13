import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PokemonProfile from "./components/PokemonProfile";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<PokemonProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
