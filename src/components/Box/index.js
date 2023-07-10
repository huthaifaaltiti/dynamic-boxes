import React, { useState } from "react";
import styles from "./styles.module.css";

export default function Box({ onAddNewBox, boxName, boxesNames }) {
  const [newBoxName, setNewBoxName] = useState("");

  const handleInputChange = (event) => {
    setNewBoxName(event.target.value);
  };

  const handleAddNewBox = () => {
    const index = boxesNames.indexOf(boxName);
    if (newBoxName) {
      onAddNewBox(index + 1, newBoxName);
      setNewBoxName("");
    }
  };

  return (
    <div className={styles.boxBody}>
      <input
        placeholder={boxName}
        type="text"
        value={newBoxName}
        onChange={handleInputChange}
      />

      <span onClick={handleAddNewBox}>+</span>
    </div>
  );
}
