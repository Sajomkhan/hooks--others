import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function Component4() {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <h1>{user.id}</h1>
      <h1>{user.name}</h1>
    </div>
  );
}
export default Component4;
