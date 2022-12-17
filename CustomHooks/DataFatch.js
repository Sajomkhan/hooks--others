import React, { useState, useEffect } from "react";
import useFatch from "./useFatch";

const DataFatch = () => {

  const {data, isLoading, error} = useFatch(
    "https://jsonplaceholder.typicode.com/todos/"
    );

  const loadingMassage = <p>todos is loading....</p>;
  const errorMassage = <p>Error: 404</p>

  const todosElement =
    data &&
    data.map((todo) => {
      return <p key={todo.id}>{todo.title}</p>;
    });
  return (
    <div>
      <h1>Data Fatch & Customs Hoods</h1>
      {error && errorMassage}
      {isLoading && loadingMassage}
      {todosElement}
    </div>
  );
};
export default DataFatch;








// const [todos, setTodos] = useState(null);  
// const [isLoading, setIsLoading] = useState(true);// API Loading দরি হলে একটি Massage-এর ব্যবস্থা করা
// const [error, setError] = useState(null);

// useEffect(() => {
//   fetch("https://jsonplaceholder.typicode.com/todos/")
//     .then((res) => {
//       if (!res.ok) {
//         throw Error("fetching is not sussessful");
//       } else {
//         return res.json();
//       }
//     })
//     .then((data) => {
//       setTodos(data);
//       setIsLoading(false); // after complete loading it will false
//       setError(null);
//     })
//     .catch((error) => {
//       setError(error.massage);
//     });
// }, []);
