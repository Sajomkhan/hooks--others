import React, { useState, useEffect } from "react";

const loadingMassage = <p>...todos is loading</p>;

const DataFatch = () => {
  const [todos, setTodos] = useState(null);  
  const [isLoading, setIsLoading] = useState(true);// API Loading দরি হলে একটি Massage-এর ব্যবস্থা করা
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => {
        if (!res.ok) {
          throw Error("fetching is not sussessful");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setTodos(data);
        setIsLoading(false); // after complete loading it will false
        setError(null);
      })
      .catch((error) => {
        setError(error.massage);
      });
  }, []);
  const todosElement =
    todos &&
    todos.map((todo) => {
      return <p key={todo.id}>{todo.title}</p>;
    });
  return (
    <div>
      <h1>Todos Data Fatch</h1>
      {error && <p>{error}</p>}
      {isLoading && loadingMassage}
      {todosElement}
    </div>
  );
};
export default DataFatch;
