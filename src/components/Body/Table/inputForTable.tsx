import React, { useState } from "react";
import { makeStyles, Button, Input } from "@material-ui/core";

const useStales = makeStyles((theme) => ({
  form: {
    display: "grid",
    gap: "20px",
    padding: "0 20px",
  },
}));

interface InputForTableProps {
  addData: (value: number) => void;
  test1: string[];
}
// React.PropsWithChildren это тоже самое что React.FC
function InputforTable(props: React.PropsWithChildren<InputForTableProps>) {
  const styles = useStales();
  const [value, setValue] = useState("");

  function handleChange(event: any) {
    setValue(event.target.value);
  }

  function handleClick() {
    props.addData(parseInt(value));
    setValue("");
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    handleClick();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input value={value} onChange={handleChange} />
      <Button variant="contained" color="primary" onClick={handleClick}>
        press
      </Button>
    </form>
  );
}

export default InputforTable;
