import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../button';

describe('Button Component', () => {
  it('should render button with children', () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole('button', { name: 'Click me' })
    ).toBeInTheDocument();
  });

  it('should apply default CSS classes', () => {
    render(<Button>Test</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'bg-blue-600',
      'hover:bg-blue-700',
      'text-white',
      'px-4',
      'py-2',
      'rounded'
    );
  });

  it('should handle click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled button</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('should accept additional props', () => {
    render(
      <Button data-testid="test-button" type="submit">
        Submit
      </Button>
    );
    const button = screen.getByTestId('test-button');
    expect(button).toHaveAttribute('type', 'submit');
  });

  it('should accept variant prop', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should accept size prop', () => {
    render(<Button size="large">Large button</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should render with custom className when passed as prop', () => {
    render(<Button className="custom-class">Custom</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  it('should handle keyboard events', () => {
    const handleKeyDown = vi.fn();
    render(<Button onKeyDown={handleKeyDown}>Test</Button>);

    const button = screen.getByRole('button');
    fireEvent.keyDown(button, { key: 'Enter', code: 'Enter' });

    expect(handleKeyDown).toHaveBeenCalledTimes(1);
  });

  it('should render different types of children', () => {
    const { rerender } = render(<Button>Text content</Button>);
    expect(screen.getByText('Text content')).toBeInTheDocument();

    rerender(
      <Button>
        <span>Nested element</span>
      </Button>
    );
    expect(screen.getByText('Nested element')).toBeInTheDocument();

    rerender(<Button>{42}</Button>);
    expect(screen.getByText('42')).toBeInTheDocument();
  });
});
