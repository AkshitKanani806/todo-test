import React from "react";
import { connect } from "react-redux";
import { Button, Checkbox, Icon, Label, List } from 'semantic-ui-react'
import { todoStateChange, deleteTodo } from "../redux/action";

const TodosList = ({ todos, completedTask, uncompletedTask, todoStateChange, deleteTodo }) => {
  const handleStateChange = (id) => {
    todoStateChange(id)
  }

  const handleRemoveTask = (id) => {
    deleteTodo(id)
  }

  return (
    <>
      {todos.length > 0 &&
        <>
          <Label as='a' image>
            <Icon disabled name='thumbs up outline' />
            {completedTask}
          </Label>
          <Label as='a' image>
            <Icon disabled name='thumbs down outline' />
            {uncompletedTask}
          </Label>
          <List divided relaxed>
            {todos.map((todo, i) => (
              <List.Item key={i}>
                <List.Content floated='right'>
                  <Button onClick={() => handleRemoveTask(todo.id)}>Remove</Button>
                </List.Content>
                <List.Content floated='left'>
                  <Checkbox slider value={todo.isTaskComplete} onChange={() => handleStateChange(todo.id)} />
                </List.Content>
                <List.Content>
                  <List.Header as='a'>{todo.header}</List.Header>
                  <List.Description as='a'>{`${todo.description}`}</List.Description>
                </List.Content>
              </List.Item>
            ))}
          </List>
        </>
      }
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  todoStateChange: todos => dispatch(todoStateChange(todos)),
  deleteTodo: todos => dispatch(deleteTodo(todos))
});
const mapStateToProps = ({ todos, completedTask, uncompletedTask }) => ({
  todos,
  completedTask,
  uncompletedTask
});
export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
