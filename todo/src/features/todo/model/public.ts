import { createEvent, createStore } from 'effector';
import { Todo } from '../../../declarations/types';

export const addTodo = createEvent<Todo>();
export const deleteTodo = createEvent<number>();
export const toggleEditMode = createEvent<number>();
export const updateTodo = createEvent<{ id: number; text: string }>();

export const $todos = createStore<Todo[]>([])
  .on(addTodo, (state, todo) => [...state, todo])
  .on(deleteTodo, (state, id) => state.filter((todo) => todo.id !== id))
  .on(toggleEditMode, (state, id) =>
    state.map((todo) =>
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    )
  )
  .on(updateTodo, (state, { id, text }) =>
    state.map((todo) =>
      todo.id === id ? { ...todo, text, isEditing: false } : todo
    )
  );
