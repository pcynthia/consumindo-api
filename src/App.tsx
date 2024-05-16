import { useEffect, useState } from "react";
import "./App.css";

interface CharactersProps {
  image: string;
  name: string;
  status: string;
  species: string;
}

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <ul>
        {characters.map((character: CharactersProps) => (
          <li className="list-character">
            <img src={character.image} alt="" />
            <div>
              <h2>{character.name}</h2>
              <p>{character.status}</p>
              <p>{character.species}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
