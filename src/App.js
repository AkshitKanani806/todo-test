import React from "react";
import { Container, Header } from "semantic-ui-react";
import TodoForm from "./components/TodoForm";
import TodosList from "./components/TodosList";

const App = () => {
  return (
    <div className="App">
      <Container text>
        <Header as='h2'>To do </Header>
        <TodoForm />
        <TodosList />
      </Container>
    </div>
  );
};


export default App;