import React from 'react';
import ReactDOM from 'react-dom';
import { TodoEntry } from './features/todo/view';

ReactDOM.render(
  <React.StrictMode>
    <TodoEntry />
  </React.StrictMode>,
  document.getElementById('root')
);
