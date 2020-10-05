import React, { useContext, useState } from "react";
import { PlayerContext } from "../../contexts/PlayerContext";
import Modal from "../Modal/Modal";
import PlayerTable from "../PlayerTable/PlayerTable.js";
import styles from "./PlayerList.module.css";

function Playerlist() {
  const [players, setPlayers] = useContext(PlayerContext);

  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);

  const addPlayer = (player) => {
    setPlayers([...players, player]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const playerData = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      birthday: formData.get("birthday"),
      position: formData.get("position"),
      important: formData.get("important"),
      id: players.length,
    };

    for (const pair of formData.entries()) {
      const [key, value] = pair;
      playerData[key] = value;
    }

    addPlayer(playerData);
    e.target.reset();
    closeModalHandler();
  };

  // const handleSort = () => {
  //   const players = players.lastName;
  //   players.sort(function (l, u) {
  //     return l.toLowerCase().localeCompare(u.toLowerCase());
  //   });
  // };

  return (
    <div>
      {show ? (
        <div onClick={closeModalHandler} className={styles.deleteOutside}></div>
      ) : null}

      <h2 className={styles.header}>
        <i className="fas fa-futbol"></i>Playerlist
      </h2>

      <button onClick={() => setShow(true)} className={styles.buttonAddPlayer}>
        Add Player
      </button>

      <PlayerTable />

      <Modal
        modalHeader={"Add a Player:"}
        show={show}
        close={closeModalHandler}
      >
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formItem}>
            <input
              name="lastName"
              type="text"
              required
              id="lname"
              className={styles.formInput}
            />
            <label className={styles.formLabel}>NAME </label>
          </div>

          <div className={styles.formItem}>
            <input
              name="firstName"
              type="text"
              required
              id="fname"
              className={styles.formInput}
            />
            <label className={styles.formLabel}>FIRST NAME </label>
          </div>

          <div className={styles.formItem}>
            <input
              name="birthday"
              type="date"
              required
              id="bday"
              className={styles.formInput}
            />
            <label className={styles.formLabel}>BIRTHDAY</label>
          </div>
          <div className={styles.formItem}>
            <select className={styles.formInput} name="position" required>
              <option value=""></option>
              <option value="goalkeeper">goalkeeper</option>
              <option value="defense">defense</option>
              <option value="center">center</option>
              <option value="striker">striker</option>
            </select>
            <label className={styles.formLabel}>POSITION </label>
          </div>
          <div className={styles.formItem}>
            <textarea
              name="important"
              type="text"
              required
              id="important"
              className={styles.formInput}
            />
            <label className={styles.formLabel}>IMPORTANT STUFF </label>
          </div>
          <button className={styles.addPlayerButtonModal} type="submit">
            AddPlayer
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default Playerlist;
