import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/Features/Todo/TodoSlice";
const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddTodo;
