import { render, screen, fireEvent } from '@testing-library/react';
import { TodoForm } from '../todo-form';
import { describe, it, expect, vi } from 'vitest';

describe('TodoForm 테스트', () => {
    it('오늘 이전 날짜를 선택하면 Add Todo 버튼이 비활성화된다.', () => {
      const setTodos = vi.fn();
      render(<TodoForm todos={[]} setTodos={setTodos} />);
  
      const todoInput = screen.getByLabelText('New Todo');
      const dateInput = screen.getByLabelText('Deadline');
      const addButton = screen.getByRole('button', { name: 'Add Todo' });
  
      fireEvent.change(todoInput, { target: { value: '공부' } });
  
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      fireEvent.change(dateInput, { target: { value: yesterday } });
  
      expect(addButton).toBeDisabled();
    });
  });