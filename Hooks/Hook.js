import React, { useEffect, useState } from "react";

const Hook = () => {
  const [count, setCount] = useState("0");
  const [name, setName] = useState("");

  useEffect(() => {
        setCount(count+1 );
  },[name]);

  return (
    <div>
        <input type="text" onChange={(e)=>setName(e.target.value)} />
      <h3>Count: {name}</h3>
      <h3>Render: {count}</h3>
      {/* <button onClick={() => handleOnClick(setCount(count + 1))}>Button</button> */}
    </div>
  );
};
export default Hook;
