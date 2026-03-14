import Counter from "./Counter";
import Batsman from "./Batsman";
import User from "./User";
import Friends from "./Friends";
import "./App.css";
import { Suspense } from "react";

// user data fetching
const fetchUser = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json(),
);

// Friends data fetching
const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};
function App() {
  const friendsPromise = fetchFriends();
  function handleClick() {
    alert("I am clicked");
  }

  const handleClick3 = () => {
    alert("I am clicked from 3");
  };

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };
  return (
    <>
      <h3>Get started Vite + React</h3>

      {/* user component */}
      <Suspense fallback={<h3>Loading...</h3>}>
        <User fetchUser={fetchUser}></User>
      </Suspense>
      {/* friends component */}
      <Suspense fallback={<h3>Friends are coming for treat... </h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>
      {/* Batsman Component */}
      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <br />
      <button
        onClick={function handleClick2() {
          alert("clicked 2");
        }}
      >
        Click Me2
      </button>
      <br />
      <button onClick={handleClick3}>Click Me 3</button>
      <br />
      <button onClick={() => handleAdd5(7)}>Click Add 5</button>
    </>
  );
}

export default App;
