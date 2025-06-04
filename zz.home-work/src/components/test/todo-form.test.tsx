import { render, screen, fireEvent } from '@testing-library/react';
import { TodoForm } from '../todo-form';
import { describe, it, expect, vi } from 'vitest';

describe('TodoForm', () => {
  it('입력값이 있을 때 Add Todo 버튼 활성화', () => {
    const setTodos = vi.fn();
    render(<TodoForm todos={[]} setTodos={setTodos} />);

    const todoInput = screen.getByLabelText('New Todo');
    const dateInput = screen.getByLabelText('Deadline');
    const addButton = screen.getByRole('button', { name: 'Add Todo' });

    expect(addButton).toBeDisabled();

    fireEvent.change(todoInput, { target: { value: '공부' } });
    fireEvent.change(dateInput, { target: { value: '2025-06-04' } });

    expect(addButton).not.toBeDisabled();
  });
});
