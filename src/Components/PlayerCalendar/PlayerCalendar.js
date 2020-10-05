import React, { useContext } from "react";
import { PlayerContext } from "../../contexts/PlayerContext";

function PlayerCalendar({ playerId }) {
  const [players] = useContext(PlayerContext);

  const player = players.find((player) => player.id === playerId);

  return <div>{player.firstName}</div>;
}

export default PlayerCalendar;
