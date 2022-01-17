export const getTodos = () => ({
  type: "GET_TODOS"
});

export const addTodo = todo => ({
  type: "ADD_TODO",
  payload: todo
});

export const todoStateChange = id => ({
  type: "TODO_STATE_CHANGE",
  payload: id
});

export const deleteTodo = id => ({
  type: "DELETE_TODO",
  payload: id
});




