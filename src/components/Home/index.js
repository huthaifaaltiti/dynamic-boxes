// react
import React, { useState } from "react";

// component
import Box from "../Box/index";
// styles
import styles from "./styles.module.css";

export default function Home() {
  const [boxesNames, setBoxesNames] = useState(["A", "B", "C"]);

  const handleAddNewBox = (index, newName) => {
    setBoxesNames((prevBoxesNames) => {
      const newList = [...prevBoxesNames];
      newList.splice(index, 0, newName);
      // console.log("newList: ", newList);

      return newList;
    });
  };

  return (
    <div className={styles.homePage}>
      {boxesNames.map((boxName) => (
        <div key={boxName}>
          <Box
            boxName={boxName}
            boxesNames={boxesNames}
            onAddNewBox={handleAddNewBox}
          />
        </div>
      ))}
    </div>
  );
}
