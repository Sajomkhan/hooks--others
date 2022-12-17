import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
// useSearchParams is used for QueryRouting

const User = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({name: name, email: email, age: age});
  }

  return (
    <div>
      <h1>User </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name"
        /><br/><br/>

        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
        /><br/><br/>

        <input
          type="text"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
          placeholder="Age"
        /><br/><br/>

        <button type="submit" >Find User</button>
      </form>
      {/* <h1>{searchParams.get("name")}</h1>
      <h1>{searchParams.get("email")}</h1>
      <h1>{searchParams.get("age")}</h1> */}
    </div>
  );
};

export default User;
