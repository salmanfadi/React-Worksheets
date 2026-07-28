import { useEffect, useState } from "react";

export default function Effectcomp() {
  const [users, setUsers] = useState([]);//ajay ,vinay
  const [count, setCount] = useState(0);//0
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  console.log(users);
  return (
    <>
      <h2>Effect comp</h2>
      <p>count is {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>increment</button>
    </>
  );
}
 