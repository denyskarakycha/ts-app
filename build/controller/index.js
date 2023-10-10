let todos = [];
export const getIndex = (req, res, next) => {
    res.status(200).json({ message: "todos" });
};
export const postIndex = (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    return res.status(201).json({ message: 'Done!', todos: todos });
};
export const update = (req, res, next) => {
    const todoId = req.params.todoId;
    const todoIndex = todos.findIndex(item => item.id === todoId);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
        return res.status(200).json({ message: 'Update!', todos: todos });
    }
    res.status(404).json({ message: "Not found" });
};
export const deleteIndex = (req, res, next) => {
    const todoId = req.params.todoId;
    if (todos.length > 0) {
        todos = todos.filter(item => {
            return item.id !== todoId;
        });
        return res.status(200).json({ message: 'Update!', todos: todos });
    }
    res.status(404).json({ message: "Not found" });
};
