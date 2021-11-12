import React, { useState, useEffect } from "react";

import axios from "axios";
import Todo from "./Todo";
const API_URL = "https://jsonplaceholder.typicode.com/todos";

// [value, func]

export default function Todos() {
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState([]);
  const fetchData = async () => {
    let res = await axios.get(API_URL);
    setTodos(res.data);
    setIsLoading(false);
  };
  console.log(todos);

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading</p>;
  } else {
    return (
      <div className="todos">
        {todos.map((todo, index) => {
          return <Todo key={index} todo={todo} />;
        })}
      </div>
    );
  }
}
/**
 * const arr = [1,2,3,4]
 * const [firstVal, secondVal] = arr; // firstVal -> 1
 * const obj = {name: "sunny", age: 24}
 * const {name} = obj // name => sunny
 * func myname(){
 * console.log("any")
 * }
 * myName()
 */
