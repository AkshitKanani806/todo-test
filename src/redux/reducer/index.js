
const initState = {
  todos: [],
  completedTask: 0,
  uncompletedTask: 0
};

export default (state = initState, action) => {
  switch (action.type) {
    case "GET_TODOS":
      return { ...state };
    case "ADD_TODO":
      const todos2 = state.todos.concat(action.payload);
      return { ...state, todos: todos2, uncompletedTask: state.uncompletedTask + 1 };
    case "DELETE_TODO":
      const matchingIndex = state.todos.findIndex((item) => item.id === action.payload);
      let completedTaskCount = state.completedTask
      let uncompletedTaskCount = state.uncompletedTask
      if (state.todos[matchingIndex].isTaskComplete === true) {
        completedTaskCount -= 1
      } else {
        uncompletedTaskCount -= 1
      }
      let todoData = state.todos.filter((item) => item.id !== action.payload);
      return { ...state, todos: todoData, completedTask: completedTaskCount, uncompletedTask: uncompletedTaskCount };
    case "TODO_STATE_CHANGE":
      let data = state.todos
      const index = state.todos.findIndex((item) => item.id === action.payload);
      data[index] = {
        ...data[index],
        isTaskComplete: !data[index].isTaskComplete
      }
      let completedTask = state.completedTask
      let uncompletedTask = state.uncompletedTask
      if (data[index].isTaskComplete === true) {
        completedTask += 1
        uncompletedTask -= 1
      } else {
        completedTask -= 1
        uncompletedTask += 1
      }

      return { ...state, todos: data, completedTask: completedTask, uncompletedTask: uncompletedTask };
    default:
      return state;
  }
};
