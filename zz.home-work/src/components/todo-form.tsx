import { TextField, Button } from '@mui/material';
import { Dispatch } from 'react';
import { Todo } from '../types/todo';
import { useTodoForm } from '../hooks/use-todo-form';

export const TodoForm = ({
  todos,
  setTodos,
}: {
  todos: Todo[];
  setTodos: Dispatch<React.SetStateAction<Todo[]>>;
}) => {
  const { initForm, updateDeadline, updateTodo, todo, deadline } =
    useTodoForm();

  const isValidLength = todo.trim().length > 0 && todo.trim().length <= 100;

  const today = new Date().toISOString().slice(0, 10);
  const isValidDate = deadline && deadline >= today;

  const handleAddTodo = () => {
    if (!(isValidLength && isValidDate)) return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: todo.trim(),
        completed: false,
        deadline,
      },
    ]);
    initForm();
  };

  return (
    <>
      <TextField
        label="New Todo"
        variant="outlined"
        fullWidth
        value={todo}
        onChange={(e) => {
          if(e.target.value.length <= 100) {
            updateTodo(e.target.value);
          }
        }}
        style={{ marginBottom: '1rem' }}
      />
      <TextField
        label="Deadline"
        type="date"
        InputLabelProps={{ shrink: true }}
        fullWidth
        value={deadline}
        onChange={(e) => {
          const selectedDate = e.target.value;
          updateDeadline(selectedDate);
        }}
        inputProps={{
          min: today,
        }}
        style={{ marginBottom: '1rem' }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddTodo}
        fullWidth
        disabled={!(isValidLength && isValidDate)}
      >
        Add Todo
      </Button>
    </>
  );
};
