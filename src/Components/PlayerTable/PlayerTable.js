import React, { useContext, useState } from "react";
import { PlayerContext } from "../../contexts/PlayerContext";
import PlayerCalendar from "../PlayerCalendar/PlayerCalendar";
import styles from "./PlayerTable.module.css";
import Modal from "../Modal/Modal";

function PlayerTable() {
  const [players, setPlayers] = useContext(PlayerContext);
  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);

  // store in the state selected playerid

  return (
    <>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr>
            <th>Name</th>
            <th>First Name</th>
            <th>Birthday</th>
            <th>Position</th>
            <th>Important</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {players.map((player, index) => {
            return (
              <tr key={index}>
                <td>{player.lastName}</td>
                <td>{player.firstName}</td>
                <td>{player.birthday}</td>
                <td>{player.position}</td>
                <td>{player.important}</td>
                <td>
                  <button className={styles.tableBtn}>Edit</button>
                </td>
                <td>
                  <button
                    className={styles.tableBtn}
                    // onClick={() => {
                    //   setSomething(player.id);
                    // }}
                  >
                    Training
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Modal
        modalHeader={"Add a Player:"}
        show={show}
        close={closeModalHandler}
      >
        {/* <PlayerCalendar playerId={} />  */}
      </Modal>
    </>
  );
}

export default PlayerTable;
