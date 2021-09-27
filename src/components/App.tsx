import React, { Component } from "react";
import Header from "./Header";
import Table from "./Body/Table";
import Fetch1 from "./Body/Fetches/fetch1";
import Starwars from "./Body/Fetches/StarwarsFetch/starwars";
import Cards from "./Body/cards/cards";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Table />
        <Fetch1 />
        <Starwars />
        <Cards />
      </div>
    );
  }
}

export default App;
