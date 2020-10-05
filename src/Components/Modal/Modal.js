import React from "react";
import styles from "./Modal.module.css";

function Modal({ show, children, close, modalHeader }) {
  return (
    <div
      className={styles.modalWrapper}
      style={{
        transform: show ? "translateY(0vh)" : "translateY(-100vh)",
        opacity: show ? "1" : "0",
      }}
    >
      <div className={styles.modalHeader}>
        <p>{modalHeader}</p>
        <span onClick={close} className={styles.closeModalbtn}>
          X
        </span>
      </div>
      <div className={styles.modalContent}>
        <div className={styles.modalBody}>{children}</div>
        <div className={styles.modalFooter}></div>
      </div>
    </div>
  );
}

export default Modal;
