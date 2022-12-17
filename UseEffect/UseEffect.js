import React, {useState, useEffect} from "react";

const UseEffect1 = () => {
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  useEffect (()=> {
    console.log('useEffect');    
  }, [isLoading])  //dependency[count] used only when count value is changed.
  //dependency[isLoading] used only when inLoading value is changed.
  return (
    <div>
      {console.log("rendering")}
      <h2>Count: {count}</h2>
      <button onClick = {()=> { setCount( count => count+1 )}} >+</button>
      <button onClick = {()=> { setIsLoading( !isLoading )}} >isLoading</button>
    </div>
  );
};
export default UseEffect1;
