import React, { useState, useEffect } from "react";
import "./App.css";
import { PlayerContext } from "./contexts/PlayerContext";
import PlayerList from "./Components/PlayerList/PlayerList";

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getLocalPlayers();
  }, []);

  useEffect(() => {
    saveLocalPlayers();
  }, [players]);

  const saveLocalPlayers = () => {
    localStorage.setItem("players", JSON.stringify(players));
  };

  const getLocalPlayers = () => {
    if (localStorage.getItem("players") === null) {
      localStorage.setItem("players", JSON.stringify([]));
    } else {
      let playerLocal = JSON.parse(localStorage.getItem("players"));
      setPlayers(playerLocal);
    }
  };

  return (
    <>
      {/* <div className="page"> */}
      <PlayerContext.Provider value={[players, setPlayers]}>
        <div className="page">
          <PlayerList />
        </div>
      </PlayerContext.Provider>
      {/* </div> */}
    </>
  );
}

export default App;
