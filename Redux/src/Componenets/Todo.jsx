import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../Redux/Features/Todo/TodoSlice";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Todos</h2>
      <ul style={{ listStyle: "none" }}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h4>{todo.todo}</h4>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Remove Todo
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
