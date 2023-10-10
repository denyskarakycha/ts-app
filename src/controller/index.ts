import {Request, Response , NextFunction } from 'express';

import { Todo } from '../models/todos.js';

let todos: Todo[] = [];

type RequestBody = {text: string};
type RequestParams = {todoId: string};
type ControllerFunction = (req: Request, res: Response, next: NextFunction) => void;

export const getIndex: ControllerFunction = (req, res, next) => {
    res.status(200).json({message: "todos"})
};

export const postIndex: ControllerFunction = (req, res, next) => {
    const body = req.body as RequestBody;
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: body.text
    };

    todos.push(newTodo);

    return res.status(201).json({message: 'Done!', todos: todos})
}

export const update: ControllerFunction = (req, res, next) => {
    const body = req.body as RequestBody;
    const params = req.params as RequestParams;
    const todoId = params.todoId;
    const todoIndex = todos.findIndex(item => item.id === todoId);

    if (todoIndex >= 0) {
        todos[todoIndex] = {id: todos[todoIndex].id, text: body.text}
        return res.status(200).json({message: 'Update!', todos: todos})
    }
    res.status(404).json({message: "Not found"});
}

export const deleteIndex: ControllerFunction = (req, res, next) => {
    const params = req.params as RequestParams;
    const todoId = params.todoId;
    if (todos.length > 0) {
        todos = todos.filter(item => {
            return item.id !== todoId;
        })
        return res.status(200).json({message: 'Update!', todos: todos})
    }
    res.status(404).json({message: "Not found"});
}