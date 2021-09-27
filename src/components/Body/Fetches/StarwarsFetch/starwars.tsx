import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "./navbar";
import Planets from "./planets";
import People from "./people";

function Starwars() {
  const [page, setPage] = useState("planets");

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar setPage={setPage} />
      <div className="content">
        {page === "planets" ? <Planets /> : <People />}
      </div>
    </QueryClientProvider>
  );
}

export default Starwars;
