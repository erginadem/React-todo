import React from "react";
import Note from "./Note";

const Notes = ({ todos, setTodos }) => {
  return (
    <div className="d-flex gap-3 flex-wrap">
      {todos.map((todo) => (
        <Note
          key={todo.id}
          text={todo.text}
          setTodos={setTodos}
          todos={todos}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default Notes;
