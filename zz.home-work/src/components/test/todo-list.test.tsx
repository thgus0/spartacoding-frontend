import { render, screen, fireEvent } from '@testing-library/react';
import { TodoList } from '../todo-list';
import { describe, it, expect, vi } from 'vitest';

const sampleTodos = [
  {
    id: 1,
    text: '운동',
    completed: false,
    deadline: '2025-06-04',
  },
];

describe('TodoList', () => {
  it('체크박스 클릭하면 텍스트에 취소선', () => {
    const setTodos = vi.fn();
    render(<TodoList todos={sampleTodos} setTodos={setTodos} />);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(setTodos).toHaveBeenCalled();
  });
});
