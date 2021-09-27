import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import styles from "./card.module.css";
import Card from "./card";

function Cards() {
  return (
    <div className="main">
      <Card />
    </div>
  );
}

export default Cards;
