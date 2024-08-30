import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList', () => {
    test('renders TodoList component', () => {
        render(<TodoList />);
        expect(screen.getByText('Todo List')).toBeInTheDocument();
        expect(screen.getByText('Learn React')).toBeInTheDocument();
        expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
        expect(screen.getByText('Write Tests')).toBeInTheDocument();
    });

    test('adds a new todo', () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText('Add new todo');
        const addButton = screen.getByText('Add Todo');

        fireEvent.change(input, { target: { value: 'New Todo Item' } });
        fireEvent.click(addButton);

        expect(screen.getByText('New Todo Item')).toBeInTheDocument();
    });

    test('toggles a todo', () => {
        render(<TodoList />);
        const todoItem = screen.getByText('Learn React');

        fireEvent.click(todoItem);

        expect(todoItem).toHaveStyle('text-decoration: line-through');

        fireEvent.click(todoItem);

        expect(todoItem).toHaveStyle('text-decoration: none');
    });

    test('deletes a todo', () => {
        render(<TodoList />);
        const deleteButton = screen.getAllByText('Delete')[0];

        fireEvent.click(deleteButton);

        expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    });
});