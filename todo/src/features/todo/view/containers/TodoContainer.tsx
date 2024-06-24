import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Todo } from '../../../../declarations/types';

import TodoList from '../parts/TodoList';
import Input from '../../../../ui/Input';
import PrimaryButton from '../../../../ui/PrimaryButton';

const Container = styled.div`
  font-family: Arial, sans-serif;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

const Header = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const TodoContainer: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const newTodoItem: Todo = {
        id: todos.length + 1,
        text: newTodo.trim(),
        isEditing: false,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    }
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleEditMode = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const updateTodo = (id: number, newText: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText, isEditing: false } : todo
      )
    );
  };

  return (
    <Container>
      <Header>Список задач</Header>
      <InputContainer>
        <Input type="text" value={newTodo} onChange={handleInputChange} />
        <PrimaryButton onClick={addTodo}>Добавить пункт</PrimaryButton>
      </InputContainer>
      <TodoList
        todos={todos}
        onToggleEdit={toggleEditMode}
        onDelete={deleteTodo}
        onUpdate={updateTodo}
      />
    </Container>
  );
};

export default TodoContainer;
