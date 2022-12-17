import React from "react";

import Todos from "./Todos";
import style from "./Home.module.css";

const dummyTodos = [
  {
    id: 1,
    title: "Todo title 1",
    desc: "Todo1 description is here...",
  },
  {
    id: 2,
    title: "Todo title 2",
    desc: "Todo1 description is here...",
  },
];
const Home = () => {
  return (
    <div className={style.container}>
      <h1 style={{color: "white"}}>Todo App</h1>
      <Todos todos={dummyTodos} />
    </div>
  );
};
export default Home;
