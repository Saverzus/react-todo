import React from 'react';
import styled from 'styled-components';
import { Todo } from '../../../../declarations/types';
import TodoItem from './TodoItem';

const TodoListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
`;

interface TodoListProps {
  todos: Todo[];
  onToggleEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onUpdate: (id: number, text: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggleEdit,
  onDelete,
  onUpdate,
}) => {
  return (
    <TodoListContainer>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleEdit={onToggleEdit}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
