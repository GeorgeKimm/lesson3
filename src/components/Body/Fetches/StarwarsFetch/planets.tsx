import React from "react";
import { useQuery } from "react-query";
import { APIResponse, IPlanet } from "./types";
import Planet from "./planet";

const Planets = () => {
  const fetchPlanets = async () => {
    const response = await fetch("https://swapi.dev/api/planets/");
    return response.json();
  };

  const { data, isLoading, isError } = useQuery<APIResponse<IPlanet>, Error>(
    "planets",
    fetchPlanets
  );
  // console.log(data);

  return (
    <div>
      <h3>Planets</h3>
      {isLoading && <div>Loading...</div>}

      {isError && <div>Error fetching data</div>}

      {data && (
        <div>
          {data.results.map((planet) => (
            <Planet key={planet.name} planet={planet} testProps1={[1, 2]} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
