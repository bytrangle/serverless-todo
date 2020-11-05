import React, { useRef, useState, useReducer } from "react";
import {
  Container,
  Heading,
  Text,
  Input,
  Label,
  Button,
  Flex,
  Checkbox,
} from "theme-ui";

const todosReducer = (state, action) => {
  switch (action.type) {
    case "addTodo":
      return [{ done: false, value: action.payload }];
    case "toggleTodoDone":
      const newState = [...state];
      newState[action.payload] = {
        done: !state[action.payload].done,
        value: state[action.payload].value,
      };
      return newState;
  }
};

const Todo = ({ user, netlifyIdentity }) => {
  const inputRef = useRef();
  const [todos, dispatch] = useReducer(todosReducer, []);
  return (
    <Container>
      <Flex
        as="form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "addTodo", payload: inputRef.current.value });
          inputRef.current.value = "";
        }}
      >
        <Label sx={{ display: "flex" }}>
          <span>Add&nbsp;todo</span>
          <Input ref={inputRef} sx={{ marginLeft: 1 }} />
        </Label>
        <Button sx={{ marginLeft: 1 }}>Submit</Button>
      </Flex>
      <Flex sx={{ flexDirection: "column" }}>
        <ul sx={{ listStyleType: "none" }}>
          {todos.map((todo, i) => (
            <Flex
              as="li"
              onClick={(e) => {
                dispatch({
                  type: "toggleTodoDone",
                  payload: i,
                });
              }}
            >
              <Checkbox checked={todo.done} />
              <span>{todo.value}</span>
            </Flex>
          ))}
        </ul>
      </Flex>
    </Container>
  );
};
export default Todo;
