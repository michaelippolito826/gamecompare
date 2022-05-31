import React from "react";
import { useEffect, useState } from "react";

function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getGames();
  }, []);

  const getGames = async () => {
    const api = await fetch(
      `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.REACT_APP_API_KEY}&steamid=76561198068106474&format=json`
    );
    const data = await api.json();
    setGames(data.response.games);
  };
  return (
    <div>
      {games.map((game) => {
        return (
          <div key={game.appid}>
            <p>{game.appid}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Games;
