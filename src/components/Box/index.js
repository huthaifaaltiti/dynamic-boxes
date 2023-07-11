// react
import React, { useState } from "react";
// styles
import styles from "./styles.module.css";

export default function Box({ onAddNewBox, boxName, boxesNames }) {
  const [newBoxName, setNewBoxName] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleInputChange = (event) => {
    setNewBoxName(event.target.value);
    // console.log({ newBoxName });
  };

  const handleBlur = () => {
    // console.log("Blur event!");
    handleAddNewBox();
    setIsActive(false);
  };

  const handleAddNewBox = () => {
    const boxIndex = boxesNames.indexOf(boxName);
    if (newBoxName) {
      // console.log({ boxIndex }, { newBoxName });

      onAddNewBox(boxIndex + 1, newBoxName);
      setNewBoxName("");
    }
  };

  return (
    <>
      <div className={styles.boxCont}>
        <div className={styles.boxBody}>
          <div className={styles.boxNameCont}>{boxName}</div>
          <span onClick={() => setIsActive(true)}>+</span>
        </div>

        {isActive && (
          <div className={styles.inputCont}>
            <input
              type="text"
              value={newBoxName}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </div>
        )}
      </div>
    </>
  );
}
