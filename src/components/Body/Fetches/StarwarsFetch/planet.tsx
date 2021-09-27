import React from "react";
import { IPlanet } from "./types";

interface PlanetProps {
  planet: IPlanet;
  testProps1: number[];
}
// React function component(я либо описываю функциональные компоненты)
const Planet: React.FC<PlanetProps> = ({ planet, testProps1 }) => {
  return (
    <div>
      <p>{planet.name}</p>
      <p>Population: {planet.population}</p>
    </div>
  );
};

export default Planet;
