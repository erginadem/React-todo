import React, { useEffect, useRef } from "react";
import { Button, Card, Form, InputGroup } from "react-bootstrap";

const NoteForm = ({ inputText, setInputText, addTodoListHandler }) => {
  const inputRef = useRef(null);

  // input handler
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  // key press enter

  // input focus
  const setFocus = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    setFocus();
  }, []);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Title</Card.Title>

        <InputGroup className="mb-3">
          <Form.Control
            value={inputText}
            placeholder="Add a new task"
            onChange={inputTextHandler}
            ref={inputRef}
          />
        </InputGroup>

        <Button type="submit" variant="dark" onClick={addTodoListHandler}>
          Create Note
        </Button>
      </Card.Body>
    </Card>
  );
};

export default NoteForm;
