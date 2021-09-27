import React from "react";
import { useQuery } from "react-query";
import { APIResponse, IPeople } from "./types";

const People = () => {
  const fetchPeople = async () => {
    const response = await fetch("https://swapi.dev/api/people");
    return response.json();
  };

  const { data, isLoading, isError } = useQuery<APIResponse<IPeople>, Error>(
    "people",
    fetchPeople
  );
  // console.log(data);

  return (
    <div>
      <h3>People</h3>
      {isLoading && <div>Loading...</div>}

      {isError && <div>Error fetching data</div>}

      {data && (
        <div>
          {data.results.map((person) => (
            <React.Fragment key={person.name}>
              <div>{person.name}</div>
              <div>{person.height}</div>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
