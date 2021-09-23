import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import styles from "./table.module.css";
import InputforTable from "./inputForTable";

const useStyles = makeStyles((theme) => ({
  table: {
    display: "inline-table",
    width: "300px",
    height: "auto",
    borderCollapse: "collapse",
    margin: "20px",
    "& th": {
      textAlign: "left",
      fontWeight: "500",
    },
  },
}));

function Table() {
  const classes = useStyles();
  const [data, setData] = useState<number[]>([]);

  function addData(num: number) {
    setData((data) => [...data, num]);
    // setData((data) => [num]);
  }

  return (
    <div className={styles.main}>
      <table className={classes.table}>
        <thead>
          <tr>
            <th className={styles.cell}>Грамм</th>
            <th className={styles.cell}>Центнер</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className={styles.cell}>
                {(item * 1000).toLocaleString("ru-RU")}
              </td>
              <td className={styles.cell}>{item / 100}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <InputforTable addData={addData} />
    </div>
  );
}

export default Table;
