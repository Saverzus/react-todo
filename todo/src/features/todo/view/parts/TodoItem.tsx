import React from 'react';
import styled from 'styled-components';
import { Todo } from '../../../../declarations/types';

const TodoItemContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #f4f4f4;
  border-radius: 4px;
  margin-bottom: 10px;

  input[type='text'] {
    flex-grow: 1;
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 8px 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

const RedButton = styled.button`
  padding: 8px 12px;
  background-color: #f72c53;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: #e72c53;
  }
`;

interface TodoItemProps {
  todo: Todo;
  onToggleEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onUpdate: (id: number, text: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggleEdit,
  onDelete,
  onUpdate,
}) => {
  return (
    <TodoItemContainer>
      {todo.isEditing ? (
        <input
          type="text"
          defaultValue={todo.text}
          onBlur={(e) => onUpdate(todo.id, e.target.value)}
        />
      ) : (
        todo.text
      )}
      <ButtonsContainer>
        <Button onClick={() => onToggleEdit(todo.id)}>
          {todo.isEditing ? 'Сохранить' : 'Изменить'}
        </Button>
        <RedButton onClick={() => onDelete(todo.id)}>Удалить</RedButton>
      </ButtonsContainer>
    </TodoItemContainer>
  );
};

export default TodoItem;
