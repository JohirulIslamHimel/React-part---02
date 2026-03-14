import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [four, setFour] = useState(0);
  const [sixes, setSixes] = useState(0);

  const handleSingles = () => {
    const updateRuns = runs + 1;
    setRuns(updateRuns);
  };
  const handleFour = () => {
    const updateRuns = runs + 4;
    const updatedFours = four + 1;
    setFour(updatedFours);
    setRuns(updateRuns);
  };
  const handleSix = () => {
    const updateRuns = runs + 6;
    const updatedSixes = sixes + 1;
    setSixes(updatedSixes);
    setRuns(updateRuns);
  };
  return (
    <div>
      <h3>Player : Bangla Batsman</h3>
      <p>
        <small>Sixes : {sixes}</small>
      </p>
      <p>
        <small>Four : {four}</small>
      </p>
      {runs > 50 && <p>Your score is 50</p>}
      <h1>Score : {runs}</h1>
      <button onClick={handleSingles}>Singles</button>
      <button onClick={handleFour}>Four</button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
}
