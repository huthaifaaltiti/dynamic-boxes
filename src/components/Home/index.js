import React, { useState } from "react";
import Box from "../Box/index";
import styles from "./styles.module.css";

export default function Home() {
  const [boxesNames, setBoxesNames] = useState(["A", "B", "C"]);

  const handleAddNewBox = (index, newName) => {
    setBoxesNames((prevBoxesNames) => {
      const newList = [...prevBoxesNames];
      newList.splice(index, 0, newName);
      return newList;
    });
  };

  return (
    <div className={styles.homePage}>
      {boxesNames.map((boxName) => (
        <div key={boxName}>
          <Box
            boxName={boxName}
            onAddNewBox={handleAddNewBox}
            boxesNames={boxesNames}
          />
        </div>
      ))}
    </div>
  );
}
