import React from "react";
import {fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import TodoList from "../components/TodoList";


test ('renders TodoList component correctly', () => {
    render(<TodoList />);


    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Master JavaScript')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Add a new todo')).toBeInTheDocument();
    expect(screen.getByText('Add')).toBeInTheDocument();
});

test('adds a new todo', () => {
    render(<TodoList />)


const input = screen.getByPlaceholderText('Add a new todo');
const addButton = screen.getByText('Add');

fireEvent.change(input, { target: { value: 'Test new todo'} });
fireEvent.click(addButton);

expect(screen.getByText('Test new todo')).toBeInTheDocument();

});