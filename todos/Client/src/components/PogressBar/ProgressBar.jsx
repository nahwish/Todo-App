import { useContext, useEffect, useState } from "react";
import { FormContext } from "../../context/FormContext";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


export const ProgressBar = () => {
  const { tasks, selectedCategory } = useContext(FormContext);
  const [trueCount, setTrueCount] = useState(0.0);


  function contarProgreso(arrayDeObjetos) {
    let trueCount = 0.0;
    let falseCount = 0.0;

    for (const objeto of arrayDeObjetos) {
      if (objeto.progress === true) {
        trueCount++;
      } 
    }

    setTrueCount(trueCount / arrayDeObjetos.length); // Convert to [0, 1] range
  }

  useEffect(() => {
    contarProgreso(tasks);
  }, [tasks]);

  return (
    <>
      <div className="progress">
        <CircularProgressbar
          styles={buildStyles({
            pathColor: `${trueCount * 100 == 50 ? "orange" : "green"}`,
          })}
          value={trueCount * 100}
          text={`${Math.round(trueCount * 100)}%`}
        ></CircularProgressbar>
        <span className="spanProgress">{selectedCategory}</span>
      </div>
    </>
  );
};
