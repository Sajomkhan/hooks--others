import React, { useState } from "react";

function Toggle1() {
  const [toggle, setToggle] = useState(true);
  return (
    <div
      style={{ margin: "0.5rem", backgroundColor: "black", padding: "1rem" }}>
      {toggle && (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          imperdiet faucibus ante, nec accumsan neque mollis a. Morbi pretium
          cursus enim, ac vehicula enim. Curabitur et sodales nisl, ut ultricies
          risus.
        </p>
      )}
      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}>
          {toggle? "Hide" : "Show" }
        </button>
      </div>
    </div>
  );
}
export default Toggle1;
