import Counter from "./Counter";
import "./App.css";

function App() {
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
      <Counter></Counter>
      <h3>Get started Vite + React</h3>
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
