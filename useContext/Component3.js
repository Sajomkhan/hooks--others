import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function Component3() {
  const user = useContext(UserContext);
   return (
    <div>
      <h1>Age: {user.age} years </h1>
    </div>
  );
}
export default Component3;
