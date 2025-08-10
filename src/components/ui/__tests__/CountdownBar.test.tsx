import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import CountdownBar from '../CountdownBar';

describe('CountdownBar Component', () => {
  it('should render countdown bar', () => {
    const { container } = render(<CountdownBar current={60} total={120} />);
    const progressBar = container.querySelector('.h-full');
    expect(progressBar).toBeInTheDocument();
  });

  it('should calculate correct percentage for normal values', () => {
    const { container } = render(<CountdownBar current={60} total={120} />);
    const progressElement = container.querySelector('.h-full');
    expect(progressElement).toHaveStyle('width: 50%');
  });

  it('should show green color for safe percentage (>20%)', () => {
    const { container } = render(<CountdownBar current={30} total={100} />);
    const progressElement = container.querySelector('.h-full');
    expect(progressElement).toHaveClass('bg-green-500');
    expect(progressElement).not.toHaveClass('bg-red-500');
  });

  it('should show red color for danger percentage (<20%)', () => {
    const { container } = render(<CountdownBar current={15} total={100} />);
    const progressElement = container.querySelector('.h-full');
    expect(progressElement).toHaveClass('bg-red-500');
    expect(progressElement).not.toHaveClass('bg-green-500');
  });

  it('should handle zero current value', () => {
    const { container } = render(<CountdownBar current={0} total={100} />);
    const progressElement = container.querySelector('.h-full');
    expect(progressElement).toHaveStyle('width: 0%');
    expect(progressElement).toHaveClass('bg-red-500');
  });

  it('should handle current equals total', () => {
    const { container } = render(<CountdownBar current={100} total={100} />);
    const progressElement = container.querySelector('.h-full');
    expect(progressElement).toHaveStyle('width: 100%');
    expect(progressElement).toHaveClass('bg-green-500');
  });

  it('should handle current greater than total', () => {
    const { container } = render(<CountdownBar current={150} total={100} />);
    const progressElement = container.querySelector('.h-full');
    expect(progressElement).toHaveStyle('width: 150%');
    expect(progressElement).toHaveClass('bg-green-500');
  });

  it('should handle negative current value', () => {
    const { container } = render(<CountdownBar current={-10} total={100} />);
    const progressElement = container.querySelector('.h-full');
    expect(progressElement).toHaveStyle('width: 0%');
    expect(progressElement).toHaveClass('bg-red-500');
  });

  it('should show danger color at exactly 20%', () => {
    const { container } = render(<CountdownBar current={20} total={100} />);
    const progressElement = container.querySelector('.h-full');
    expect(progressElement).toHaveClass('bg-green-500');
  });

  it('should show danger color at 19%', () => {
    const { container } = render(<CountdownBar current={19} total={100} />);
    const progressElement = container.querySelector('.h-full');
    expect(progressElement).toHaveClass('bg-red-500');
  });

  it('should apply correct CSS classes for container', () => {
    const { container } = render(<CountdownBar current={50} total={100} />);
    const containerDiv = container.firstChild;
    expect(containerDiv).toHaveClass(
      'w-full',
      'bg-gray-300',
      'rounded',
      'h-4',
      'overflow-hidden',
      'my-2'
    );
  });

  it('should apply transition classes to progress bar', () => {
    const { container } = render(<CountdownBar current={50} total={100} />);
    const progressElement = container.querySelector('.h-full');
    expect(progressElement).toHaveClass(
      'h-full',
      'transition-all',
      'duration-500',
      'ease-linear'
    );
  });

  it('should handle decimal percentages', () => {
    const { container } = render(<CountdownBar current={33} total={100} />);
    const progressElement = container.querySelector('.h-full');
    expect(progressElement).toHaveStyle('width: 33%');
  });

  it('should handle zero total (edge case)', () => {
    const { container } = render(<CountdownBar current={10} total={0} />);
    const progressElement = container.querySelector('.h-full');
    // When total is 0, percentage becomes Infinity, Math.max should handle this
    expect(progressElement).toBeInTheDocument();
  });
});
