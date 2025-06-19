import "./App.css";
import { useEffect, useState } from "react";

async function getData() {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  );
  return res.json();
}

function App() {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    getData().then(setData);
  }, []);

  return (
    <main>
      <div>
        <header>Test me</header>
        <h2>Pokémon List:</h2>
        {data ? (
          data.results.map((pokemon, index) => (
            <p key={index}>
              {pokemon.name} {pokemon.url}
            </p>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </main>
  );
}

export default App;
