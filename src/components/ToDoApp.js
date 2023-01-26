import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import NoteForm from "./NoteForm";
import Notes from "./Notes";

const ToDoApp = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  // add todo list handler
  const addTodoListHandler = (e) => {
    e.preventDefault();
    if (!inputText) {
      alert("Please enter a note!");
    } else {
      setTodos([
        ...todos,
        {
          text: inputText,
          completed: false,
          id: Math.random(),
        },
      ]);
      setInputText("");
    }
  };

  return (
    <Container className="mt-2">
      <Row>
        <Col className="col-lg-4">
          <NoteForm
            inputText={inputText}
            setInputText={setInputText}
            addTodoListHandler={addTodoListHandler}
          />
        </Col>
        <Col className="col-lg-8">
          <Notes todos={todos} setTodos={setTodos} />
        </Col>
      </Row>
    </Container>
  );
};

export default ToDoApp;
