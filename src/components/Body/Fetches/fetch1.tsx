import React, { useState, useEffect } from "react";
import { makeStyles, Button, Input } from "@material-ui/core";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

function Fetch1() {
  const [loaded, setLoaded] = useState(false);
  const [items, setItems] = useState<User[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data: User[]) => setItems(data))
      .finally(() => setLoaded(true));
  }, []);
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.address.city}</li>
      ))}
    </ul>
  );
}

// function Fetch1() {
//   const [loaded, setLoaded] = useState(false);
//   const [items, setItems] = useState<User[]>([]);
//   useEffect(() => {
//     const fetchUsers = async () => {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       const data: User[] = await response.json();
//       setItems(data);
//       setLoaded(true);
//     };
//     fetchUsers();
//   }, []);
//   return (
//     <ul>
//       {items.map((item) => (
//         <li key={item.id}>{item.address.city}</li>
//       ))}
//     </ul>
//   );
// }

export default Fetch1;
