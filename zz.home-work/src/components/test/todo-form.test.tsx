import { render, screen, fireEvent } from '@testing-library/react';
import { TodoForm } from '../todo-form';
import { describe, it, expect, vi } from 'vitest';

describe('TodoForm 테스트', () => {
    it('100자 이상 입력하면 Add Todo 버튼이 비활성화된다.', () => {
      const setTodos = vi.fn();
      render(<TodoForm todos={[]} setTodos={setTodos} />);
  
      const todoInput = screen.getByLabelText('New Todo');
      const dateInput = screen.getByLabelText('Deadline');
      const addButton = screen.getByRole('button', { name: 'Add Todo' });
  
      fireEvent.change(todoInput, { target: { value: 'a'.repeat(101) } });
      fireEvent.change(dateInput, { target: { value: '2025-06-04' } });
  
      expect(addButton).toBeDisabled();
    });
  });