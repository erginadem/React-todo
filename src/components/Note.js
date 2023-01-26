import React from "react";
import { Card } from "react-bootstrap";
import { BsFillTrashFill, BsCheck2 } from "react-icons/bs";
import { VscDebugRestart } from "react-icons/vsc";

const Note = ({ todo, text, todos, setTodos }) => {
  // delete handler
  const deleteHandler = () => {
    const result = window.confirm("Are you sure to delete");
    if (result) {
      setTodos(todos.filter((item) => item.id !== todo.id));
    }
  };

  // complete handler
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <Card style={{ width: "12rem" }}>
      <Card.Body className=" text-center">
        <Card.Text
          className={
            todo.completed
              ? "text-decoration-line-through fs-6 text-danger"
              : "fs-5"
          }
        >
          {text}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex align-items-center gap-3 justify-content-center">
        {todo.completed === false ? (
          <BsCheck2
            style={{ cursor: "pointer" }}
            className="fs-3"
            onClick={completeHandler}
          />
        ) : (
          <VscDebugRestart
            style={{ cursor: "pointer" }}
            className="fs-4"
            onClick={completeHandler}
          />
        )}

        <BsFillTrashFill
          style={{ cursor: "pointer" }}
          className=" fs-4"
          onClick={deleteHandler}
        />
      </Card.Footer>
    </Card>
  );
};

export default Note;
