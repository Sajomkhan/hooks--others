import React from "react";

const myStyle = {
  color: 'red',
  textAlign: "center",
  margin: 50,
}

const Error = () => {
  return (
    <div style={myStyle}>
      <h3>404 : Page not found</h3>
    </div>
  );
};

export default Error;
