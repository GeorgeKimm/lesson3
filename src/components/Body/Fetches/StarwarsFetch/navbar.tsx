import React, { useState } from "react";
import { makeStyles, Button } from "@material-ui/core";

interface Navbar {
  setPage: (value: string) => void;
}

function Navbar(props: React.PropsWithChildren<Navbar>) {
  function ChangePage(value: string) {
    props.setPage(value);
  }

  return (
    <nav>
      <Button
        variant="contained"
        color="primary"
        onClick={() => ChangePage("planets")}
      >
        Planets
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => ChangePage("people")}
      >
        People
      </Button>
    </nav>
  );
}

export default Navbar;
