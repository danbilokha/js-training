const findTodo = (todos, id) => todos
    .forEach((todo) => {
        if (todo.id === id) {
            return todo;
        }
    });