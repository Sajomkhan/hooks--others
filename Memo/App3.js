import React, { useState } from "react";
import Massage from "./Massage";

const App3 = () => {
  const [count, setCount] = useState(0);

  console.log("App3 Randering");

  return (
    <div>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}>
        Increment
      </button>
      <br />
      <br />
      <Massage numberOfMassage={3} />  
    </div>
  );
};
export default App3;

//set props: mumberOgMassage
